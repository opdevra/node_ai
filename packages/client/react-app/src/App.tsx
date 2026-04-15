import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
   Card,
   CardAction,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';

function App() {
   const [message, setMessage] = useState('0');

   useEffect(() => {
      fetch('/api/hello')
         .then((res) => res.json())
         .then((data) => setMessage(data.message))
         .catch((err) => console.error('Error fetching:', err));
   }, []);
   return (
      <div className="container">
         <p className="font-bold p-4 text-lg">{message}</p>
         <div className="flex min-h-svh flex-col items-center justify-center">
            <Button>Click me</Button>
         </div>
         <Card size="sm" className="max-w-sm">
            <CardHeader>
               <CardTitle>Card Title</CardTitle>
               <CardDescription>Card Description</CardDescription>
               <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
               <p>Card Content</p>
            </CardContent>
            <CardFooter>
               <p>Card Footer</p>
            </CardFooter>
         </Card>
      </div>
   );
}

export default App;
