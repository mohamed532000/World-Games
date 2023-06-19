import "../css/blog.css"
import "../../../globaly-styles.css";
import Ul from "../../../components/ul-list/js/Ul";
import BlogBox from "./BlogBox";
import ReadMoreBtn from "../../../components/read-more-btn/Read-more-btn";
import { useEffect } from "react";


function BlogPage() {

    useEffect(() => {
        let list = document.querySelectorAll("ul.ulForBlog li");
        
        let allBlogsBoxes = document.querySelectorAll(".blogs-container .box")

        list.forEach(li=>{

            li.onclick = () =>{
                let activeBlogBoxes = document.querySelectorAll(`.${li.textContent}`);
                
                list.forEach(li =>{

                    li.classList.remove("active");

                });

                li.classList.add("active");
                
                allBlogsBoxes.forEach(BlogBox => {
                    BlogBox.classList.remove("active")
                });

                activeBlogBoxes.forEach(activeBlogBox => {
                    activeBlogBox.classList.add("active")
                });
                console.log(allBlogsBoxes)

            }
        })

    }, []);


    return (
        <>
            <section className="blog-section" id="about-section">

                <Ul ulClassName="ulForBlog" li1="All" li2="CS-GO" li3="DOTA-2" li4="FORTNITE" li5="FIFA"/>

                <div className="container blogs-container">
                    
                    <BlogBox boxClassName="All blog box CS-GO active" boxImg={"https://images.pexels.com/photos/4974907/pexels-photo-4974907.jpeg?auto=compress&cs=tinysrgb&w=600"} boxDate="April 22,2020" boxTitle="Streamlining the path to conversion" />

                    <BlogBox boxClassName="All blog box DOTA-2 active" boxImg={"https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600"} boxDate="SEBTEMBER 13,2018" boxTitle="SEO tips for the constractor and remodeling industy" />

                    <BlogBox boxClassName="All blog box active" boxImg={"https://images.pexels.com/photos/5380593/pexels-photo-5380593.jpeg?auto=compress&cs=tinysrgb&w=600"} boxDate="OCTOBER 25,2020" boxTitle="Power" />
                    
                    <BlogBox boxClassName="All blog box active" boxImg={"https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600"} boxDate="MARCH 19,2019" boxTitle="create we design is more important than ever before" />

                    <BlogBox boxClassName="All blog box FORTNITE active" boxImg={"https://tse3.mm.bing.net/th?id=OIP.nl7ZmWaLa1Gko9-LfzIwkgHaEK&pid=Api&P=0"} boxDate="April 22,2021" boxTitle="Driving engagemenet online" />

                    <BlogBox boxClassName="All blog box FIFA active" boxImg={"https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=600"} boxDate="NOVEMBER 02,2022" boxTitle="The art and science of colors and their influence on users" />

                    <BlogBox boxClassName="All blog box CS-GO active" boxImg={"https://images.pexels.com/photos/3103199/pexels-photo-3103199.jpeg?auto=compress&cs=tinysrgb&w=600"} boxDate="NOVEMBER 02,2022" boxTitle="An impactful site is more than just good design" />

                    <BlogBox boxClassName="All blog box CS-GO active" boxImg={"https://images.pexels.com/photos/5240547/pexels-photo-5240547.jpeg?auto=compress&cs=tinysrgb&w=600"} boxDate="NOVEMBER 02,2022" boxTitle="Designing for the web in 2023" />
                </div>
                <ReadMoreBtn path="#" />
            </section>

        </>
    )
}

export default BlogPage;