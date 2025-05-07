import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you provide sign language interpreters on all tours?",
    answer: "Yes, we provide certified sign language interpreters on all our tours. We are committed to making our safari experiences accessible to Deaf and Hard-of-Hearing travelers. Please let us know your preferred sign language when booking."
  },
  {
    question: "How many people are typically in a tour group?",
    answer: "Our tour groups are intentionally kept small, with a maximum of 8 people per group. This ensures personalized attention, quality sign language interpretation, and a more intimate experience with Kenya's wildlife and culture."
  },
  {
    question: "What is the best time to visit Kenya for safaris?",
    answer: "The best time for wildlife viewing is during the dry seasons (June to October and January to February) when animals gather around water sources. The spectacular wildebeest migration in Maasai Mara happens from July to October. However, we offer enjoyable tours year-round with each season offering unique experiences."
  },
  {
    question: "Are your tours suitable for children?",
    answer: "Many of our tours are family-friendly and can be enjoyed by children. We offer specialized family safaris that include activities designed for different age groups. Please specify the ages of children when booking so we can recommend the most appropriate tour options."
  },
  {
    question: "What accommodations do you provide during the safari?",
    answer: "We offer a range of accommodations from luxury lodges to comfortable tented camps, depending on your preference and budget. All accommodations are carefully selected for their quality, accessibility features, and scenic locations. Our team ensures that communication needs are addressed at all properties."
  }
];

export default function FaqSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value={`item-${index}`} className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 hover:bg-primary-color/5 font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 text-[#666666]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}