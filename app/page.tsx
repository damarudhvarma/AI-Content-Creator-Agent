import AgentPulse from "@/components/AgentPulse";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";
import { Brain, Image as ImageIcon, MessageSquare,Sparkles,Video } from "lucide-react";
import { describe } from "node:test";

const steps = [
  {
    title: "1. Connect Your Content",
    description:"Share your YourTube video URL and Let your agent get to work.",
    icon:Video,
    iconbg:"bg-blue-100",
    iconColor:"text-blue-600"
  },
  {
    title: "2. AI Analysis",
    description:"Your personal analyzes every aspect of your content",
    icon:Brain,
  },
  {
    title:"3. Recieve Intelligence",
    description:"Get actionable insights and strategic recommendations.",
    icon:MessageSquare,
  }
]

const features = [
  {
    title : "AI Analysis",
    description: "Get detailed analysis of your video content with AI-powered insights.",
    icon:Brain,
    iconbg:"bg-blue-100",
    iconColor:"text-blue-600"
  },
  {
    title : "Smart Transcription",
    description: "Get detailed analysis of your video content with AI-powered insights.",
    icon:MessageSquare,
    iconbg:"bg-green-100",
    iconColor:"text-green-600"
  },
  {
    title : "Thumnnail Generation",
    description: "Get detailed analysis of your video content with AI-powered insights.",
    icon:ImageIcon,
    iconbg:"bg-purple-100",
    iconColor:"text-purple-600"
  },
  {
    title:"Title Generation",
    description: "Get detailed analysis of your video content with AI-powered insights.",
    icon:MessageSquare,
    iconbg:"bg-yellow-100",
    iconColor:"text-yellow-600" 
  },
  {
    title:"short script ",
    description: "Get detailed analysis of your video content with AI-powered insights.",
    icon:Video,
    iconbg:"bg-red-100",
    iconColor:"text-red-600"
  },
  {
    title:"Discuss with Your AI Agent",
    description: "Get detailed analysis of your video content with AI-powered insights.",
    icon:Sparkles,
    iconbg:"bg-orange-100",
    iconColor:"text-orange-600"
  }
]
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* hero */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb-12">
            <AgentPulse size="large" color="blue" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 ">Meet Your Personal{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                AI Content Agent
              </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your video content with AI- powered analysis,
                transcription,and insights. Get started in seconds.

              </p>
              <YoutubeVideoForm/>

          </div>
        </div>
      </section>
      {/* features Section*/}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-6xl ">
    <h2 className="text-3xl font-bold text-center mb-12">
      Powerful Features for Content Creators
    </h2>
  
  <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
    {/* feature cards */}
    {
      features.map((feature,index)=>{
        const Icon = feature.icon;
        return (
          <div key ={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconbg}`}>
              <Icon className={`w-6 h-6 ${feature.iconColor}`} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        )
})}
  </div>
  </div>
</section>

      {/* how it works section */}

<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 max-w-6xl ">
    <h2 className="text-3xl font-bold text-center mb-12 ">Meet Your AI Agent in 3 Simple Steps</h2>
  
  <div className="grid md:grid-cols-3 gap-8">
   {steps.map((step,index)=>{
     const Icon = step.icon;
      return (
        <div key={index} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
             <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
        </div>
      )

   })}

  </div>
  </div>
</section>
      {/* footer */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Meet Your AI content Agent?</h2>
          <p className="text-xl text-blue-50">
            Join Creators leveraging AI to transform their content.
          </p>
        </div>

      </section>
    </div>
  );
}
