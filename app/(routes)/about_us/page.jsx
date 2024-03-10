"use client"

import React from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function AboutUs() {
    return (
        <div>
            <div className='my-10 mx-5 md:mx-36'>
                <h2 className='font-bold text-4xl my-2 text-center mt-10'>About Us</h2>
                <p className='text-lg text-center mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
                    dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum
                    dolor feugiat at. Ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
                    dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum
                    dolor feugiat at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, magni ab veniam quae voluptatem culpa delectus exercitationem est. Saepe eligendi officia officiis! Quisquam amet sed distinctio modi laboriosam, assumenda aliquam.
                </p>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4'>
                    <div className={`flex flex-col items-center justify-center`}>
                        <Image className='rounded-full h-[150px] object-cover' src='/aboutus.png' alt='logo' width={150} height={150} />
                    </div>
                    <div className={`flex flex-col items-center justify-center`}>
                        <Image className='rounded-full h-[150px] object-cover' src='/aboutus2.png' alt='logo' width={150} height={200} />
                    </div>
                    <div className={`flex flex-col items-center justify-center`}>
                        <Image className='rounded-full h-[150px] object-cover' src='/aboutus3.png' alt='logo' width={150} height={200} />
                    </div>
                </div>
                <h2 className='font-bold text-4xl my-2 text-center pt-10 mb-10'>Contact Us</h2>
                <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-2 gap-4'>
                    <div >
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" placeholder="Email" />
                    </div>
                    <div >
                        <Label htmlFor="phone">Phone</Label>
                        <Input type="phone" placeholder="phone" />
                    </div>
                    <div>
                        <Label htmlFor="address">Address</Label>
                        <Input type="address" placeholder="address" />
                    </div>
                    <div className='col-span-2'>
                        <div>
                            <Button className='rounded-lg'><div style={{width:'10vw'}}>Submit</div></Button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default AboutUs;

