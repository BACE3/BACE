// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { useState } from "react";

export default function Accordion() {
  const [activeDefault, setActiveDefault] = useState(0);
  const defaultAccordion = [
    {
      title: "You have an error that can't be described or the first error",
      text:
        "Reload the page the extension. This will solve most problems.",
      bg: "primary",
    },
    {
      title: "You cannot access three-tools in your chrome extension panel",
      text:
        "Exit out of chrome devtools inspector and re-enter.",

      bg: "info",
    },
    {
      title: 'You only see "three-tools requires a page reload"',
      text:
        "Ensure your page utilizes three.js entities outside of iframes. Three-tools will not recognize three.js objects inside iframes or work on pages without three.js entities. The most simple fix is to use an HTML page.",

      bg: "info",

    },
    {
      title: 'You cannot type "h" into the searchbar',
      text:
        'Chrome extension has a bug where "h" cannot be typed into our extensions searchbar. Use shift + "h" instead.',

      bg: "info",
    }

  ];
  return (
    <div className="faq__wrapper" data-wow-delay="0.5s">
      {/* <div className="accordion" id="accordionExample"> */}

        {defaultAccordion.map((d, i) => (
          <div className="accordion-item" key={i}>
            <h2
              className="accordion-header" id="headingOne"
              onClick={() =>
                setActiveDefault(activeDefault === i ? -1 : i)
              }>
              <button
                className={`accordion-button ${activeDefault === i ? "" : "collapsed"}`}
                onClick={() =>
                  setActiveDefault(
                    activeDefault === i ? -1 : i
                  )
                }
              >
                {" "}
                {d.title}
              </button>
            </h2>

            {/* <div className="collapse show" >
                            <div className="card-body">
                                <p className="m-b0">{d.text}</p>
                            </div>
                        </div> */}
            <div className={`accordion-collapse ${activeDefault === i ? " collapse show" : "collapse"
              }`}  onClick={() =>
                setActiveDefault(
                  activeDefault === i ? -1 : i
                )
              }>
              <div className="card-body" data-wow-delay=".5s">
                <p className="m-b0">{d.text}</p>
              </div>
            </div>
          </div>
        ))}
      {/* </div> */}
    </div>

  )
}

// <div className="faq__wrapper wow fadeInUp" data-wow-delay=".3s">
//   <div className="accordion" id="accordionExample">
//     <div className="accordion-item">
//       <h2 className="accordion-header" id="headingOne">
//         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//           What to do if you can’t access ?
//         </button>
//       </h2>
//       <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//         <div className="accordion-body">
//           <p>Looking to start an online store and youre not sure where to begin? I guide will help you to navigate Would you like to boost your Twitter profile.</p>
//         </div>
//       </div>
//     </div>
//     <div className="accordion-item">
//       <h2 className="accordion-header" id="headingTwo">
//         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//           How to start an online store in 2021 ?
//         </button>
//       </h2>
//       <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//         <div className="accordion-body">
//           <p>Looking to start an online store and youre not sure where to begin? I guide will help you to navigate Would you like to boost your Twitter profile.</p>
//         </div>
//       </div>
//     </div>
//     <div className="accordion-item border-none">
//       <h2 className="accordion-header" id="headingThree">
//         <button className="accordion-button collapsed pb-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//           How to change font size in wordPress ?
//         </button>
//       </h2>
//       <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//         <div className="accordion-body">
//           <p>Looking to start an online store and youre not sure where to begin? I guide will help you to navigate Would you like to boost your Twitter profile.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>