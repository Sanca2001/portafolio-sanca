// "use client";

// import { useState } from "react";
// import TestimonialModal from "@/components/about/TestimonialModal";
// import { testimonials, type Testimonial } from "@/data/about";

// export default function Testimonials() {
//   const [selected, setSelected] = useState<Testimonial>(testimonials[0]);
//   const [open, setOpen] = useState(false);

//   const openModal = (testimonial: Testimonial) => {
//     setSelected(testimonial);
//     setOpen(true);
//   };

//   return (
//     <>
//       <section className="testimonials">
//         <h3 className="h3 testimonials-title">Testimonials</h3>

//         <ul className="testimonials-list has-scrollbar">
//           {testimonials.map((item) => (
//             <li className="testimonials-item" key={item.id}>
//               <div className="content-card" onClick={() => openModal(item)}>
//                 <figure className="testimonials-avatar-box">
//                   <img src={item.avatar} alt={item.name} width="60" />
//                 </figure>

//                 <h4 className="h4 testimonials-item-title">{item.name}</h4>

//                 <div className="testimonials-text">
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <TestimonialModal
//         open={open}
//         testimonial={selected}
//         onClose={() => setOpen(false)}
//       />
//     </>
//   );
// }
