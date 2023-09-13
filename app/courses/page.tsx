import Image from "next/image";
import yogaImg from "@/public/assets/yoga.webp";
import pilatesImg from "@/public/assets/pilates.jpg";
import paaldansenImg from "@/public/assets/paaldansen.jpg";

const page = () => {
  return (
    <div className="flex flex-col gap-8 mt-5 mr-5">
      <div className="flex gap-5">
        <Image src={yogaImg} alt="yoga pose" style={{ width: 400, height: 250 }} />
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">Yoga</h1>
          <p>
            Welcome to our transformative yoga course! In this journey of self-discovery and holistic well-being, we invite you to embark on a path that harmonizes mind, body, and spirit. Our
            carefully crafted course is designed to introduce you to the ancient practice of yoga, providing you with the tools to cultivate physical strength, mental clarity, and inner peace. Whether
            you are a beginner or an experienced yogi, our dedicated instructors will guide you through a series of postures, breathing techniques, and meditation practices that will empower you to
            find balance and vitality in your everyday life. Join us as we explore the profound benefits of yoga and embark on a quest for personal growth and vitality. Namaste!
          </p>
          <button className="bg-gray-200 p-4 py-2 rounded-md hover:bg-gray-300 w-fit">Join course</button>
        </div>
      </div>
      <div className="flex gap-11">
        <Image src={pilatesImg} alt="pilates workout" style={{ width: 400, height: 250 }} />
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">Pilates</h1>
          <p>
            Welcome to our invigorating Pilates course! Join us on a journey to enhance your strength, flexibility, and overall well-being. Pilates is a mindful practice that focuses on core strength,
            posture, and body awareness. Whether you&apos;re a newcomer or an experienced practitioner, our skilled instructors are here to guide you through a series of exercises and movements that
            will help you develop a strong and balanced body. Embrace the power of Pilates to improve your physical health and achieve greater mind-body harmony. Get ready to embark on a
            transformative Pilates experience with us. Let&apos;s start moving towards a healthier you!
          </p>
          <button className="bg-gray-200 p-4 py-2 rounded-md hover:bg-gray-300 w-fit">Join course</button>
        </div>
      </div>
      <div className="flex gap-5">
        <Image src={paaldansenImg} alt="paaldansen" style={{ width: 400, height: 250 }} />
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-bold">Pole dancing</h1>
          <p>
            Welcome to our captivating pole dancing course! Get ready to explore the art of movement, strength, and self-expression like never before. Pole dancing is a dynamic and empowering form of
            fitness that combines dance, acrobatics, and athleticism. Whether you&apos;re a complete beginner or have some experience, our dedicated instructors are here to guide you through a series
            of graceful spins, sensual transitions, and exhilarating tricks. Join us in a supportive and inclusive environment as we harness the power of pole dancing to boost your confidence, build
            strength, and unleash your inner artist. Embark on a journey of self-discovery and empowerment with us. Let&apos;s elevate your fitness and creativity through the world of pole dancing.
          </p>
          <button className="bg-gray-200 p-4 py-2 rounded-md hover:bg-gray-300 w-fit">Join course</button>
        </div>
      </div>
    </div>
  );
};

export default page;
