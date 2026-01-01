// import { auth } from "./Auth";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// export default function LogForm() {
//   const navigate = useNavigate();

//   const handleGoogleLogin = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);

//       console.log("Logged in user:", result.user);
//       navigate("/movies");

//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <section className="auth-container d-flex align-items-center justify-content-center">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-12 col-md-8 col-lg-5 col-xl-4">
//             <div className="auth-card shadow-lg">

//               <div className="auth-header text-center mb-4">
//                 <h2 className="display-6 fw-bold">Sign In</h2>
//                 <p className="text-muted small">
//                   Continue with your Google account
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={handleGoogleLogin}
//                 className="btn btn-outline-light w-100 py-3 d-flex align-items-center justify-content-center gap-2 btn-google-custom"
//               >
//                 {/* SVG SAME */}
//                 <span>Continue with Google</span>
//               </button>

//               <div className="auth-footer text-center mt-4">
//                 <p className="text-secondary small mb-0">
//                   Secure login powered by Google
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
