"use client"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormFieldWithIcon from "@/components/ui/form-field-with-icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Asterisk, CheckCircle2, Mail } from "lucide-react";
import validator from "validator";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";


const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .refine(validator.isEmail, { message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Please enter a message of at least 10 characters." }),
})

const ContactUsForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSendMessage = async (data: z.infer<typeof ContactFormSchema>) => {
    // Client-only for now: no backend wired up yet.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log(data);
    setSubmitted(true);
    form.reset();
  }
  return (
        <div className="shrink-0">
          <p className="eyebrow mb-3">Send us an email</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-monochrome mb-5">
          Feel free to write
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSendMessage)} className="lg:w-full w-full">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full mt-4">
                      <FormLabel className="text-sm font-medium">
                        Name
                      </FormLabel>
                      <FormControl className="w-full">
                        <Input
                          placeholder="Name"
                          {...field}
                          className="text-[14px] w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="flex items-start text-sm font-medium gap-x-1">
                        Email
                        <Asterisk className="w-3 h-3 stroke-app-destructive" />
                      </FormLabel>
                      <FormFieldWithIcon FieldIcon={Mail}>
                        <FormControl>
                          <Input
                            placeholder="Enter Email"
                            type="email"
                            {...field}
                            className="auth-form_input-field pl-[42px] pr-[14px] focus-visible:outline-none focus-visible:ring-2 h-9 text-[14px]"
                          />
                        </FormControl>
                      </FormFieldWithIcon>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="text-sm font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="text-[14px] h-[120px] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                variant="brand"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="mt-8 w-full disabled:opacity-60"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitted && (
                <p
                  role="status"
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-brand"
                >
                  <CheckCircle2 className="h-4 w-4 stroke-brand" />
                  Thanks! Your message has been received.
                </p>
              )}
            </form>
          </Form>
        </div>
  );
};

export default ContactUsForm

