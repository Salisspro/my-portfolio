


export default function MyOffer() {
  return (
    <div className="p-5 transition-all duration-300 bg-gradient-to-t from-slate-900 to-slate-700 text-slate-50 
    ">
      <p className="text-2xl my-5 font-semibold">Our Services</p>
      <div className="flex flex-col-reverse ">

        <div className="text-[20px]">
          <p>You may join our developer group</p>
          <p>We are a group of developers who are passionate about building web applications. We have experience in building responsive and user-friendly web applications using React, Tailwind CSS, and other modern web technologies.
            <button className="border w-full p-3 rounded-sm my-2 animate-pulse">Get Started</button>
          </p>

          <p className=" text-4xl mt-10 font-semibold">We offer a wide range of services including:</p>
        </div>
      </div>
      <div className="font-semibold md:flex grid grid-cols-1 items-center justify-center md:space-x-5 space-y-5 p-3">

        <ul className="list-disc list-inside md:flex items-center justify-between md:space-x-20 md:mt-10 md:text-[20px]">
          <div>
            <li>Web development</li>
            <li>Mobile app development</li>
            <li>UI/UX design</li>
            <li>API development</li>
            <li>Database management</li>
            <li>Cloud computing</li>
            <li>DevOps</li>
            <li>SEO</li>
            <li>Social media marketing</li>
            <li>Content writing</li>
            <li>Graphic design</li>
            <li>Digital marketing</li>
            <li>Branding</li>
          </div>
          <div>

            <li>Video editing</li>
            <li>Photography</li>
            <li>Animation</li>
            <li>3D modeling</li>
            <li>Game development</li>
            <li>Software development</li>
            <li>Machine learning</li>
            <li>Artificial intelligence</li>
            <li>Data science</li>
            <li>Blockchain development</li>
            <li>Cybersecurity</li>
            <li>Internet of Things (IoT)</li>
            <li>Augmented reality (AR)</li>
          </div>
        </ul>

      </div>
    </div>
  )
}
