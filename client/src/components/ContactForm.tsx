import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Container from './Container';

const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  propertyType: z.string({ required_error: 'Please select a property type' }),
  propertyAddress: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const serviceAreas = [
  'Toronto', 'Mississauga', 'Brampton', 'Markham', 
  'Vaughan', 'Richmond Hill', 'Oakville', 'Burlington'
];

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      propertyType: '',
      propertyAddress: '',
      message: '',
    },
  });
  
  // Form submission
  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted. We'll be in touch shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `There was a problem submitting your inquiry: ${error.message}`,
        variant: "destructive",
      });
    }
  });
  
  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-medium">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-4">Contact Us Today</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#374151]">Request a property appraisal or ask questions about our services</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#374151]">First Name*</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#374151]">Last Name*</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#374151]">Email Address*</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#374151]">Phone Number*</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="propertyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#374151]">Property Type*</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="propertyAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#374151]">Property Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#374151]">Message*</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary resize-none" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-[#1e3a8a] text-white px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out h-auto"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div>
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="font-heading text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#1F2937]">Office Address</h4>
                    <p className="text-[#374151]">123 Bay Street, Suite 400<br />Toronto, ON M5X 1E3</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#1F2937]">Phone</h4>
                    <p className="text-[#374151]">(416) 875-6515</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#1F2937]">Email</h4>
                    <p className="text-[#374151]">info@pnpappraisal.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-[#1F2937]">Business Hours</h4>
                    <p className="text-[#374151]">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-[#1F2937] mb-4">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
