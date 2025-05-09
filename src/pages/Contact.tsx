import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTools,
  //FaFacebookF,
  FaUserTie,
} from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

import CustomInputField from "@/components/custom-input/CustomInputField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import img8 from "../assets/Banner-image/image/bike- banner.8.jpg";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});

export default function ContactFormPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to send your message. Please try again.");
    }
  }
  return (
    <div className="container mx-auto text-black md:py-20">
      <Helmet>
        <title>Contact Us - Bike Shop || Online Delivery</title>
      </Helmet>

      {/* Header Section */}
      <div className="relative mb-10 rounded-lg h-60">
        <img
          src={img8}
          alt="bike-banner"
          className="absolute top-0 left-0 z-0 object-cover w-full h-full "
        />
        <div className="absolute top-0 left-0 z-10 flex flex-col items-start justify-start p-10 text-white rounded-lg">
          <nav className="flex items-center space-x-2 text-sm">
            <div className="relative group">
              <Link
                to="/"
                className="hover:text-[#8E1616] transition-colors duration-300"
              >
                Homepage
              </Link>
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
            </div>
            <span>›</span>
            <span>Contact</span>
          </nav>
          <h1 className="mb-3 text-4xl font-bold uppercase">Contact us</h1>
        </div>
      </div>
      <div className="w-full h-[300px] rounded-md overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902654301801!2d90.3911964753072!3d23.750903089147105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89443e1e19f%3A0x9a7b6c2e5869c16e!2sDhaka!5e0!3m2!1sen!2sbd!4v1681123456789!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info and Form */}
      <div className="grid gap-10 px-10 mt-10 md:grid-cols-2">
        {/* Left - Contact Info */}
        <div className="space-y-4 text-base rounded-md ">
          <h3 className="mb-10 text-4xl font-semibold">Contact Information</h3>

          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              +8801994361085, +8801829662328, +8801914163150, +8801719313438
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              bikeShop25@gmail.com
            </p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-blue-400" />
              Dhaka, Bangladesh
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <strong>Billing enquiries:</strong> accounts@bikeShop25.com
            </p>
            <p className="flex items-center gap-2">
              <FaTools className="text-blue-400" />
              <strong>Technical enquiries:</strong> noc@bikeShop25.com
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <strong>New connection:</strong> sales@dotinternetbd.com
            </p>
            <p className="flex items-center gap-2">
              <FaUserTie className="text-blue-400" />
              <strong>Management:</strong> admin@bikeShop25.com
            </p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-[#ebeef5] p-10 rounded-md shadow-md">
          <Card className="w-full mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid gap-4">
                    <CustomInputField
                      name="name"
                      label="Full Name"
                      placeholder="Enter Full Name"
                      type="text"
                      control={form.control}
                    />
                    <CustomInputField
                      name="email"
                      label="Email"
                      placeholder="Enter email address"
                      type="email"
                      control={form.control}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <FormLabel htmlFor="message">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              placeholder="Your message..."
                              autoComplete="off"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
