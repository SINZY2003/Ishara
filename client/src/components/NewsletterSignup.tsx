import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Loader2, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.string().email({ message: "Please enter a valid email address" });

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [specialOffers, setSpecialOffers] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      emailSchema.parse(email);
      
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
      }, 1500);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      {!submitted ? (
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-[#333333] mb-2">Join Our Newsletter</h3>
          <p className="text-[#666666] mb-4">Stay updated with our latest adventures and special offers for inclusive travel experiences.</p>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error ? "border-red-500" : ""}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="special-offers" 
                checked={specialOffers}
                onCheckedChange={setSpecialOffers}
              />
              <Label htmlFor="special-offers" className="text-sm">
                I'd like to receive special offers and discounts
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary-color hover:bg-primary-color/90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </>
              )}
            </Button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#333333] mb-2">Thank You for Subscribing!</h3>
          <p className="text-[#666666]">You'll be the first to receive updates on our new adventures and special offers.</p>
          
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setEmail('');
              setSubmitted(false);
            }}
          >
            Subscribe another email
          </Button>
        </motion.div>
      )}
    </div>
  );
}