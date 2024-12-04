import React from 'react'
import Card from './card'

function App() {
  let data = [
    {
      name:"INTEL",
      image:"https://c4.wallpaperflare.com/wallpaper/570/21/93/intel-wallpaper-preview.jpg",
      description:"Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California, and incorporated in Delaware.Intel designs, manufactures, and sells computer components and related products for business and consumer markets. It is considered one of the world's largest semiconductor chip manufacturers by revenue and ranked in the Fortune 500 list of the largest United States corporations by revenue for nearly a decade"
    },
    {
      name:"NVIDIA",
      image:"https://c4.wallpaperflare.com/wallpaper/646/782/415/nvidia-logo-simple-minimalism-wallpaper-preview.jpg",
      description:"Nvidia Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California, and incorporated in Delaware. It is a software and fabless company which designs and supplies graphics processing units (GPUs), application programming interfaces (APIs) for data science and high-performance computing, as well as system on a chip units (SoCs) for mobile computing and the automotive market. Nvidia is also a dominant supplier of artificial intelligence (AI) hardware and software."
    },
  
    {
      name:"AMD",
      image:"https://c4.wallpaperflare.com/wallpaper/910/473/239/ryzen-amd-minimalism-black-background-wallpaper-preview.jpg",
      description:"Advanced Micro Devices, Inc. (AMD) is an American multinational corporation and technology company headquartered in Santa Clara, California and maintains significant operations in Austin, Texas. AMD is a hardware and fabless company that designs and develops central processing units (CPUs), graphics processing units (GPUs), field-programmable gate arrays (FPGAs), system-on-chip (SoC), and high-performance compute solutions. AMD serves a wide range of business and consumer markets, including gaming, data centers, artificial intelligence (AI), and embedded systems."
    },
    {
      name:"ASUS",
      image:"https://c4.wallpaperflare.com/wallpaper/933/766/507/asus-republic-of-gamers-wallpaper-preview.jpg",
      description:"ASUSTeK Computer Inc.is a Taiwanese[7] multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, Taiwan. Its products include desktop computers, laptops, netbooks, mobile phones, networking equipment, monitors, Wi-Fi routers, projectors, motherboards, graphics cards, optical storage, multimedia products, peripherals, wearables, servers, workstations and tablet PCs. The company is also an original equipment manufacturer (OEM)."
    },
    {
      name:"APPLE",
      image:"https://c4.wallpaperflare.com/wallpaper/595/622/340/apple-dark-logo-4k-wallpaper-preview.jpg",
      description:"Apple Inc. is an American multinational corporation and technology company headquartered and incorporated in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services. Founded in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and Ronald Wayne, the company was incorporated by Jobs and Wozniak as Apple Computer, Inc. the following year. It was renamed Apple Inc. in 2007 as the company had expanded its focus from computers to consumer electronics. Apple is the largest technology company by revenue, with US$391.04 billion in FY 2024"
    },
    {
      name:"MICROSOFT",
      image:"https://c4.wallpaperflare.com/wallpaper/971/171/781/windows-10-simple-microsoft-windows-black-background-wallpaper-preview.jpg",
      description:"Microsoft Windows is a product line of proprietary graphical operating systems developed and marketed by Microsoft. It is grouped into families and sub-families that cater to particular sectors of the computing industry – Windows (unqualified) for a consumer or corporate workstation, Windows Server for a server and Windows IoT for an embedded system. Windows is sold as either a consumer retail product or licensed to third-party hardware manufacturers who sell products bundled with Windows."
    },
    
  ]
  return <>
<div className="container">

  <h1 className="my-4">
    <small>TECH COMPANIES</small>
  </h1>

  <div className="row">
    {
      data.map((e,i)=>{
        return <>
        <Card data={e} key={i}/>
        </>

      })
    }
  </div>
  </div>
  </>
}

export default App