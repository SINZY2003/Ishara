import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { CalendarIcon, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function BookingWidget() {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState('');
  const [destination, setDestination] = useState('');
  const { toast } = useToast();

  const handleSearch = () => {
    if (!date || !guests || !destination) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to search for available safaris.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Search Successful!",
      description: `Looking for safaris to ${destination} for ${guests} guests on ${format(date, 'PPP')}`,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:shadow-xl transform hover:-translate-y-1">
      <h3 className="text-xl font-bold text-[#333333] mb-4">Find Your Adventure</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#666666]">Destination</label>
          <Select value={destination} onValueChange={setDestination}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maasai-mara">Maasai Mara</SelectItem>
              <SelectItem value="mount-kenya">Mount Kenya</SelectItem>
              <SelectItem value="diani-beach">Diani Beach</SelectItem>
              <SelectItem value="amboseli">Amboseli National Park</SelectItem>
              <SelectItem value="tsavo">Tsavo National Park</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#666666]">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#666666]">Guests</label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
              <SelectItem value="5">5 Guests</SelectItem>
              <SelectItem value="6+">6+ Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2 flex items-end">
          <Button 
            onClick={handleSearch}
            className="w-full bg-primary-color hover:bg-primary-color/90 text-white"
          >
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
}