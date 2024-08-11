import './Company.css';
import { useState } from "react";
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Accordion from "@mui/material/Accordion";
import { Modal, TextField } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Key from '../../../auth/Key';



// const Company = () => {

//   return (
//     <div className="Company_component_container">
//       <p>Company Structure Table</p>
//       <div className="Company">
//         {
//           departments.map((item,index) => {
//           return (
//             <>
//               <Accordion key={item.id}className="com">
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel1-content"
//                   id="panel1-header"
//                 >
//                   <Typography key={item.id}>
//                     {item.name}
//                   </Typography>
//                   {Key((state) => state.isAdmin) ? (
//                     <>
//                       <button className="button_edit_an">
//                         <MdEdit onClick={() => openComModal(index)} />
//                       </button>
//                       <button className="button_delete_an">
//                         <RiDeleteBin6Line onClick={() => handleComDelete()} />
//                       </button>
//                     </>
//                   ) : null}
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   {/* {
//                   item.children.map((subItem) => {
//                     return (
//                       <>
//                         <Accordion key={subItem.id} className='dept'>
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel1-content"
//                             id="panel1-header"
//                           >
//                             <Typography key={subItem.id}>
//                                 {subItem.name}
//                             </Typography>
//                             {Key((state) => state.isAdmin) ? (
//                               <>
//                                 <button className="button_edit_an">
//                                   <MdEdit onClick={() => openDeptModal()}/>
//                                 </button>
//                                 <button className="button_delete_an">
//                                   <RiDeleteBin6Line onClick={() => handleDeptDelete()}/>
//                                 </button>
//                               </>
//                             ) : null}
//                           </AccordionSummary>
//                           <AccordionDetails>
//                             {subItem.children.map((subsubItem) => {
//                               return (
//                                 <>
//                                   <Accordion key={subsubItem.id} className='div'>
//                                     <AccordionSummary
//                                       expandIcon={<ExpandMoreIcon />}
//                                       aria-controls="panel1-content"
//                                       id="panel1-header"
//                                     >
//                                       <Typography key={subsubItem.id}>
//                                           {subsubItem.name}
//                                       </Typography>
//                                       {Key((state) => state.isAdmin) ? (
//                                         <>
//                                           <button className="button_edit_an">
//                                             <MdEdit onClick={() => openDivModal()}/>
//                                           </button>
//                                           <button className="button_delete_an">
//                                             <RiDeleteBin6Line onClick={() => handleDivDelete()}/>
//                                           </button>
//                                         </>
//                                       ) : null}
//                                     </AccordionSummary>
//                                     <AccordionDetails>
//                                       {subsubItem.children.map(
//                                         (subsubsubItem) => {
//                                           return (
//                                             <>
//                                               <Accordion key={subsubsubItem.id} className='team'>
//                                                 <AccordionSummary>
//                                                   {subsubsubItem.name}
//                                                   {Key((state) => state.isAdmin) ? (
//                                                     <>
//                                                       <button className="button_edit_an">
//                                                         <MdEdit onClick={() => openTeamModal()}/>
//                                                       </button>
//                                                       <button className="button_delete_an">
//                                                         <RiDeleteBin6Line onClick={() => handleTeamDelete()}/>
//                                                       </button>
//                                                     </>
//                                                   ) : null}
//                                               </AccordionSummary>
//                                               </Accordion>
//                                             </>
//                                           );
//                                         }
//                                       )}
//                                     </AccordionDetails>
//                                   </Accordion>
//                                 </>
//                               );
//                             })}
//                           </AccordionDetails>
//                         </Accordion>
//                       </>
//                     );
//                   })} */}
//                 </AccordionDetails>
//               </Accordion>
//             </>
//           );
//         })}

//       </div>
//     </div>
//   );
// }

// export default Company;



const Company = () => {
  const Admin = Key((state) => state.isAdmin);

  const [departments, setDepartments] = useState([
    {
      name: "CEO of ET Company",
      id: 1,
      children: [
        {
          name: "Corp. Strategy Dept.",
          id: 2,
          children: [
            {
              name: "Corp. Strategy Div.",
              id: 3,
              children: [{ name: "Finance Team", id: "team", children: [] }],
            },
            { name: "Accounting Div.", id: 4, children: [] },
            {
              name: "HR Div.",
              id: 5,
              children: [
                { name: "HR Administration Team", id: "team", children: [] },
              ],
            },
            {
              name: "SCM Div.",
              id: 6,
              children: [{ name: "Warehouse Team", id: "team", children: [] }],
            },
            {
              name: "General Affair Div.",
              id: 7,
              children: [
                { name: "Vehicle Management Team", id: 8, children: [] },
              ],
            },
          ],
        },
        {
          name: "Legal Dept.",
          id: 9,
          children: [
            { name: "Legal Div.", id: 10, children: [] },
            { name: "Compliance Div.", id: 11, children: [] },
          ],
        },
        {
          name: "Commercial Dept.",
          id: 12,
          children: [
            {
              name: "Tashkent Sales Div.",
              id: 13,
              children: [
                {
                  name: "Group of digital flows’s rent Team",
                  id: 14,
                  children: [],
                },
              ],
            },
            {
              name: "Region Sales Div.",
              id: 15,
              children: [
                {
                  name: "Region analysis and reporting Team",
                  id: 16,
                  children: [],
                },
                { name: "Region administration Team", id: 17, children: [] },
              ],
            },
            {
              name: "Customer Care Div.",
              id: 18,
              children: [
                { name: "Corporate Customer Service Team", id: 19, children: [] },
                {
                  name: "B2B Tashkent customer service Team",
                  id: 20,
                  children: [],
                },
                { name: "B2C Customer Service Team", id: 21, children: [] },
              ],
            },
            { name: "B2B Cust. Support Div.", id: 22, children: [] },
          ],
        },
        {
          name: "Technical Dept.",
          id: 23,
          children: [
            {
              name: "N/W Construction Div.",
              id: 24,
              children: [
                { name: "Projects management Team", id: 25, children: [] },
                { name: "Installation Team", id: 27, children: [] },
              ],
            },
            {
              name: "N/W Management Div.",
              id: 28,
              children: [
                { name: "DWDM/SDH Administration Team", id: 29, children: [] },
                { name: "Internet Administration Team", id: 30, children: [] },
                { name: "NGN Administration Team", id: 31, children: [] },
                { name: "DC&BB Administration Team", id: 32, children: [] },
                { name: "Electricity Team", id: 33, children: [] },
              ],
            },
            {
              name: "N/W OP Tashkent Div.",
              id: 34,
              children: [
                {
                  name: "Station Facilities Maintenance Team",
                  id: 35,
                  children: [],
                },
                { name: "Customer Support Team", id: 36, children: [] },
                { name: "Customer Support group Team", id: 37, children: [] },
                { name: "VIP technical support Team", id: 38, children: [] },
                { name: "LCS Maintenance Team", id: 39, children: [] },
                { name: "FOCL Maintenance Team", id: 40, children: [] },
              ],
            },
            {
              name: "N/W OP Region Div.",
              id: 41,
              children: [
                { name: "Samarkand Operation Team", id: 42, children: [] },
                { name: "Navoiy Operation Team", id: 43, children: [] },
                { name: "Andijan Operation Team", id: 44, children: [] },
                { name: "Khorezm Operation Team", id: 45, children: [] },
                { name: "Bukhara Operation Team", id: 46, children: [] },
                { name: "Kashkadarya Operation Team", id: 47, children: [] },
                { name: "Surkhandarya Operation Team", id: 48, children: [] },
                { name: "Sirdarya Operation Team", id: 49, children: [] },
                { name: "Djizak Operation Team", id: 50, children: [] },
                { name: "Fergana Operation Team", id: 51, children: [] },
                { name: "Namangan Operation Team", id: 52, children: [] },
                {
                  name: "Karakalpakstan Rep.  Operation Team",
                  id: 53,
                  children: [],
                },
              ],
            },
            {
              name: "Wireless N/W OP Div.",
              id: 54,
              children: [
                { name: "Wireless Customer Support Team", id: 55, children: [] },
                {
                  name: "Wireless Station Operations Team",
                  id: 56,
                  children: [],
                },
              ],
            },
            {
              name: "N/W Planning Div.",
              id: 57,
              children: [
                { name: "Quality Control Team", id: 58, children: [] },
                { name: "Lease Agreement Team", id: 59, children: [] },
                { name: "Technical Accounting Team", id: 60, children: [] },
                { name: "Connection Survey Team", id: 61, children: [] },
              ],
            },
            {
              name: "Highway N/W Div.",
              id: 62,
              children: [
                { name: "Tashkent Highway N/W Team", id: 63, children: [] },
                { name: "Kashkadarya Highway N/W Team", id: 64, children: [] },
                { name: "Navoi Highway N/W Team", id: 65, children: [] },
                { name: "Namangan Highway N/W Team", id: 66, children: [] },
                { name: "Djizak Highway N/W Team", id: 67, children: [] },
                { name: "Khorezm Highway N/W Team", id: 68, children: [] },
              ],
            },
          ],
        },
        {
          name: "Marketing Dept.",
          id: 69,
          children: [
            {
              name: "Marketing Div.",
              id: 70,
              children: [
                { name: "Product Marketing Team", id: 71, children: [] },
                { name: "Communication Team", id: 72, children: [] },
                { name: "Service Innovation Team", id: 73, children: [] },
              ],
            },
            {
              name: "CX Div.",
              id: 74,
              children: [
                { name: "Call Center Team", id: 75, children: [] },
                { name: "CX Support Team", id: 76, children: [] },
              ],
            },
            { name: "Office Mgmt. TF", id: 77, children: [] },
          ],
        },
        {
          name: "Data Center Dept.",
          id: 78,
          children: [
            {
              name: "DC Construction Div.",
              id: 79,
              children: [
                { name: "DC Design & Consulting Team", id: 80, children: [] },
                {
                  name: "DC implementation Team (Construction)",
                  id: 81,
                  children: [],
                },
              ],
            },
            {
              name: "DC Operation Div.",
              id: 82,
              children: [
                { name: "DC Facility Team", id: 83, children: [] },
                { name: "DC Network Team", id: 84, children: [] },
                { name: "Monitoring Team", id: 85, children: [] },
              ],
            },
            {
              name: "DC Support Div.",
              id: 86,
              children: [
                { name: "Planning and Marketing Team", id: 87, children: [] },
                { name: "Customer Migration Support Team", id: 88, children: [] },
              ],
            },
          ],
        },
        {
          name: "New Biz Dept.",
          id: 89,
          children: [
            {
              name: "GTM Div.",
              id: 90,
              children: [
                { name: "GTM 1 Team", id: 91, children: [] },
                { name: "GTM 2 Team", id: 92, children: [] },
              ],
            },
            {
              name: "IT Biz Div.",
              id: 93,
              children: [
                { name: "Planning Team", id: 94, children: [] },
                { name: "Product Management Team", id: 95, children: [] },
                { name: "B2B Solution Team", id: 96, children: [] },
              ],
            },
            {
              name: "SW Development Div.",
              id: 97,
              children: [
                { name: "SW Development 1 Team", id: 98, children: [] },
                { name: "SW Development 2 Team ", id: 99, children: [] },
              ],
            },
          ],
        },
        {
          name: "IT Dept.",
          id: 100,
          children: [
            {
              name: "Billing Div.",
              id: 101,
              children: [
                { name: "New BSS Integration Team", id: 102, children: [] },
              ],
            },
            { name: "Internal DX Div.", id: 103, children: [] },
            {
              name: "IT Division",
              id: 104,
              children: [
                { name: "Server Support Team", id: 105, children: [] },
                { name: "Own N/W Support Team", id: 106, children: [] },
                { name: "IT Service Support Team", id: 107, children: [] },
              ],
            },
          ],
        },
      ],
    },
  ]);
  const handleDelete = (id) => {
    const updatedDepartments = departments
      .map((department) => {
        if (department.id === id) {
          return null;
        }

        const updatedSubItems = department.children.filter((subItem) => {
          if (subItem.id === id) {
            return false; 
          }

          const updatedSubSubItems = subItem.children.filter((subSubItem) => {
            if (subSubItem.id === id) {
              return false; 
            }

            const updatedSubSubSubItems = subSubItem.children.filter(
              (subSubSubItem) => {
                return subSubSubItem.id !== id;
              }
            );

            return { ...subSubItem, children: updatedSubSubSubItems };
          });

          return { ...subItem, children: updatedSubSubItems };
        });

        return { ...department, children: updatedSubItems };
      })
      .filter(Boolean);

    setDepartments(updatedDepartments);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [editedName, setEditedName] = useState("");

   const openModal = (item) => {
     setCurrentItem(item);
     setEditedName(item.name);
     setIsModalOpen(true);
   };

   const handleEdit = () => {
     const updatedDepartments = departments.map((department) => {
       if (department.id === currentItem.id) {
         return { ...department, name: editedName };
       }

       const updatedSubItems = department.children.map((subItem) => {
         if (subItem.id === currentItem.id) {
           return { ...subItem, name: editedName };
         }

         const updatedSubSubItems = subItem.children.map((subSubItem) => {
           if (subSubItem.id === currentItem.id) {
             return { ...subSubItem, name: editedName };
           }

           const updatedSubSubSubItems = subSubItem.children.map(
             (subSubSubItem) => {
               if (subSubSubItem.id === currentItem.id) {
                 return { ...subSubSubItem, name: editedName };
               }
               return subSubSubItem;
             }
           );

           return { ...subSubItem, children: updatedSubSubSubItems };
         });

         return { ...subItem, children: updatedSubSubItems };
       });

       return { ...department, children: updatedSubItems };
     });

     setDepartments(updatedDepartments);
     setIsModalOpen(false);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };

  return (
    <div className="Company_component_container">
      <p>Company Structure Table</p>
      <div className="Company">
        {/* <div
          id="w-node-_7b53c5f4-89c1-84ff-42cb-fb24433c5479-70eaea30"
          className="et-3d_wrapper"
        >
          <div className="et-3d w-embed w-iframe">
            <iframe
              src="https://my.spline.design/untitled-c613e3f0a8857f3e9fe5686761258720/"
              frameBorder="0"
              width="100%"
              height="100%"
              allowFullScreen
              title="3D Model"
            ></iframe>
          </div>
        </div> */}
        
        {departments.map((item) => (
          <Accordion key={item.id} className="com">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>{item.name}</Typography>
              {Admin && (
                <>
                  <button className="button_edit_an">
                    <MdEdit onClick={() => openModal(item)} />
                  </button>
                  <button className="button_delete_an">
                    <RiDeleteBin6Line onClick={() => handleDelete(item.id)} />
                  </button>
                </>
              )}
            </AccordionSummary>
            <AccordionDetails>
              {item.children.map((subItem) => (
                <Accordion key={subItem.id} className="dept">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>{subItem.name}</Typography>
                    {Admin && (
                      <>
                        <button className="button_edit_an">
                          <MdEdit onClick={() => openModal(subItem)} />
                        </button>
                        <button className="button_delete_an">
                          <RiDeleteBin6Line
                            onClick={() => handleDelete(subItem.id)}
                          />
                        </button>
                      </>
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    {subItem.children.map((subsubItem) => (
                      <Accordion key={subsubItem.id} className="div">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3-content"
                          id="panel3-header"
                        >
                          <Typography>{subsubItem.name}</Typography>
                          {Admin && (
                            <>
                              <button className="button_edit_an">
                                <MdEdit onClick={() => openModal(subsubItem)} />
                              </button>
                              <button className="button_delete_an">
                                <RiDeleteBin6Line
                                  onClick={() => handleDelete(subsubItem.id)}
                                />
                              </button>
                            </>
                          )}
                        </AccordionSummary>
                        <AccordionDetails>
                          {subsubItem.children.map((subsubsubItem) => (
                            <Accordion key={subsubsubItem.id} className="team">
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>{subsubsubItem.name}</Typography>
                                {Admin && (
                                  <>
                                    <button className="button_edit_an">
                                      <MdEdit
                                        onClick={() => openModal(subsubsubItem)}
                                      />
                                    </button>
                                    <button className="button_delete_an">
                                      <RiDeleteBin6Line
                                        onClick={() =>
                                          handleDelete(subsubsubItem.id)
                                        }
                                      />
                                    </button>
                                  </>
                                )}
                              </AccordionSummary>
                            </Accordion>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <Modal
        style={{ justifyContent: "center" }}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <div
          style={{
            marginLeft: "45%",
            marginTop: "15%",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "white",
            margin: "20px auto",
            maxWidth: "500px",
          }}
        >
          <h2 id="edit-modal-title">Edit</h2>
          <button className="close-form-button" onClick={closeModal}>
            X
          </button>

          <TextField
            label="Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <button className="form-button" onClick={handleEdit}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Company;