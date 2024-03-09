import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

function BookingHistoryList({ bookingHistory, type }) {

  const [bookingHistorys, setBookingHistory] = useState({});
  console.log('bookingHistory', bookingHistory)
  useEffect(() => {
    if (bookingHistory) {
      setBookingHistory(bookingHistory);
    }
  }, [bookingHistory]);

  const cancelAppointment = (booking) => {
    GlobalApi.deleteBooking(booking.id).then(resp => {
      if (resp) {
        Swal.fire({
          title: 'Booking Delete Successfully!',
          icon: 'success',
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        const updatedBookings = bookingHistorys.filter(item => item.id !== booking.id);
        setBookingHistory(updatedBookings);
      }
    }, (e) => {
      toast('Error while canceling booking!');
      Swal.fire({
        title: 'Error while canceling booking!',
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: false,
        timer: 2000,
      });
      setBookingHistory(bookingHistory);
    });
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {bookingHistorys.length > 0 ? (
        bookingHistorys.map((booking) => (
          <div key={booking.id} className='grid'>
            <div className='border rounded-lg p-3 mb-5'>
              <div className='flex gap-4'>
                {booking?.businessList?.name && (
                  <Image
                    src={booking?.businessList?.images[0]?.url}
                    alt='image'
                    width={120}
                    height={120}
                    className='rounded-lg object-cover'
                  />
                )}
                <div className='flex flex-col gap-2'>
                  <h2 className='font-bold'>{booking.businessList.name}</h2>
                  <h2 className='flex gap-2 text-primary'>
                    <User /> {booking.businessList.contactPerson}
                  </h2>
                  <h2 className='flex gap-2 text-gray-500'>
                    <MapPin className='text-primary' /> {booking.businessList.address}
                  </h2>
                  <h2 className='flex gap-2 text-gray-500'>
                    <Calendar className='text-primary' /> Service on :{' '}
                    <span className='text-black'> {booking.date}</span>
                  </h2>
                  <h2 className='flex gap-2 text-gray-500'>
                    <Clock className='text-primary' /> Service on :{' '}
                    <span className='text-black'> {booking.time}</span>
                  </h2>
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="mt-5 w-full border-red-300 ">Cancel Appointment</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                    Cancel Appointment Click on 'Confirm'.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => cancelAppointment(booking)}
                    >Confirm</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))
      ) : (
        <div className='grid md:col-span-2'> {/* Set col-span-2 for medium-sized screens or larger */}
          <div className='border rounded-lg p-5 text-center'>No Booked</div>
        </div>
      )}
    </div>
  );
}

export default BookingHistoryList;
