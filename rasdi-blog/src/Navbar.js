const Navbar = () => {
    return ( 
       <nav className = "navbar">
           <img src = "/images/logo1.png" alt= "logo "></img>
           <h1></h1>
           <div className = "links">
               <a href = "/">Home</a>
               <a href="/create" >New Blog</a>
               <a href = "/info">Info</a>
               <a href = "/contact">Contact</a>
           </div>
       </nav>
     );
}
 
export default Navbar ;