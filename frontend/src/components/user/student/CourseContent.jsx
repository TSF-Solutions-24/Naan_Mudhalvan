import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Accordion, Modal } from 'react-bootstrap';
import axiosInstance from '../../common/AxiosInstance';
import ReactPlayer from 'react-player';
import { UserContext } from '../../../App';
import NavBar from '../../common/NavBar';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button } from '@mui/material';

const CourseContent = () => {
   const user = useContext(UserContext);
   const { courseId, courseTitle } = useParams(); // Extract courseId and title from URL
   const [courseContent, setCourseContent] = useState([]);
   const [currentVideo, setCurrentVideo] = useState(null);
   const [playingSectionIndex, setPlayingSectionIndex] = useState(-1);
   const [completedSections, setCompletedSections] = useState([]);
   const [completedModule, setCompletedModule] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [certificate, setCertificate] = useState(null);

   // Extract section IDs from the completed module
   const completedModuleIds = completedModule.map((item) => item.sectionId);

   // Download the certificate as a PDF
   const downloadPdfDocument = (rootElementId) => {
      const input = document.getElementById(rootElementId);
      html2canvas(input).then((canvas) => {
         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF();
         pdf.addImage(imgData, 'JPEG', 0, 0);
         pdf.save('download-certificate.pdf');
      });
   };

   // Fetch course content from the server
   const getCourseContent = async () => {
      try {
         const res = await axiosInstance.get(`/api/user/coursecontent/${courseId}`, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
         });
         if (res.data.success) {
            setCourseContent(res.data.courseContent);
            setCompletedModule(res.data.completeModule);
            setCertificate(res.data.certficateData.updatedAt);
         }
      } catch (error) {
         console.error("Error fetching course content:", error);
      }
   };

   // Effect to fetch course content on component mount or when courseId changes
   useEffect(() => {
      getCourseContent();
   }, [courseId]);

   // Play video for a section
   const playVideo = (videoPath, index) => {
      setCurrentVideo(videoPath);
      setPlayingSectionIndex(index);
   };

   // Mark a module as completed
   const completeModule = async (sectionId) => {
      if (completedModule.length < courseContent.length) {
         if (playingSectionIndex !== -1 && !completedSections.includes(playingSectionIndex)) {
            setCompletedSections([...completedSections, playingSectionIndex]);

            try {
               const res = await axiosInstance.post(
                  `/api/user/completemodule`,
                  { courseId, sectionId },
                  {
                     headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                     },
                  }
               );
               if (res.data.success) {
                  alert(res.data.message);
                  getCourseContent();
               }
            } catch (error) {
               console.error("Error marking module as completed:", error);
            }
         }
      } else {
         setShowModal(true);
      }
   };

   return (
      <>
         <NavBar />
         <h1 className="my-3 text-center">Welcome to the course: {courseTitle}</h1>

         <div className="course-content">
            <div className="course-section">
               <Accordion defaultActiveKey="0" flush>
                  {courseContent.map((section, index) => {
                     const sectionId = section._id;
                     const isSectionCompleted = completedModuleIds.includes(sectionId);

                     return (
                        <Accordion.Item key={index} eventKey={index.toString()}>
                           <Accordion.Header>{section.S_title}</Accordion.Header>
                           <Accordion.Body>
                              <p>{section.S_description}</p>
                              {section.S_content && (
                                 <>
                                    <Button
                                       color="success"
                                       className="mx-2"
                                       variant="text"
                                       size="small"
                                       onClick={() => playVideo(`http://localhost:8000${section.S_content.path}`, index)}
                                    >
                                       Play Video
                                    </Button>
                                    {!isSectionCompleted && !completedSections.includes(index) && (
                                       <Button
                                          variant="success"
                                          size="sm"
                                          onClick={() => completeModule(sectionId)}
                                          disabled={playingSectionIndex !== index}
                                       >
                                          Completed
                                       </Button>
                                    )}
                                 </>
                              )}
                           </Accordion.Body>
                        </Accordion.Item>
                     );
                  })}
                  {completedModule.length === courseContent.length && (
                     <Button className="my-2" onClick={() => setShowModal(true)}>
                        Download Certificate
                     </Button>
                  )}
               </Accordion>
            </div>
            <div className="course-video w-50">
               {currentVideo && (
                  <ReactPlayer
                     url={currentVideo}
                     width="100%"
                     height="100%"
                     controls
                  />
               )}
            </div>
         </div>

         {/* Certificate Modal */}
         <Modal
            size="lg"
            show={showModal}
            onHide={() => setShowModal(false)}
            dialogClassName="modal-90w"
            aria-labelledby="certificate-modal-title"
         >
            <Modal.Header closeButton>
               <Modal.Title id="certificate-modal-title">Completion Certificate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <p>Congratulations! You have completed all sections. Here is your certificate:</p>
               <div id="certificate-download" className="certificate text-center">
                  <h1>Certificate of Completion</h1>
                  <div className="content">
                     <p>This is to certify that</p>
                     <h2>{user.userData?.name}</h2>
                     <p>has successfully completed the course</p>
                     <h3>{courseTitle}</h3>
                     <p>on</p>
                     <p className="date">{new Date(certificate).toLocaleDateString()}</p>
                  </div>
               </div>
               <Button
                  onClick={() => downloadPdfDocument("certificate-download")}
                  style={{ float: "right", marginTop: 3 }}
               >
                  Download Certificate
               </Button>
            </Modal.Body>
         </Modal>
      </>
   );
};

export default CourseContent;
