import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { UseSelector } from "react-redux";
import { useAppSelector } from "@/lib/store";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { calculateTotal } from "@/lib/features/pizza-slice";
const Cart: React.FC = () =>{
  const [open, setOpen] = useState(false)
  const totalCost = useAppSelector((state)=> state.pizzas.cost)
  const pizzaSlices = useAppSelector((state)=> state.pizzas.sliceCount)
  const pizza=useAppSelector((state)=> state.pizzas)
  const dispatch = useDispatch<AppDispatch>();

  const handleOpen = () => {
    setOpen(!open)
    dispatch(calculateTotal())
}

  return (
    <>
      <Button placeholder="click me" onClick={handleOpen} variant="gradient">
        Open Cart
      </Button>
      <Dialog placeholder="click me" open={open} handler={handleOpen}>
        <DialogHeader placeholder="click me">Your Pizza Cart</DialogHeader>
        <DialogBody placeholder="click me">

            {
                (pizzaSlices==8) ? 
                <div className='flex items-center justify-between mx-5 h-full'>
                <h2>Its A Whole Pizza Today</h2> 
                <p> {pizza.baseprice} EVERY</p>
                </div>
                : 
                <div  className='flex items-center justify-between mx-5 h-full'>
                <h2> Pizza Slices</h2>
                <p> {pizza.sliceCount} X {pizza.slice}</p>
                </div>
            }
            <div className='flex items-center justify-between mx-5 h-full'>
                <h2> Pepperoni Toppings</h2>
                <p> {pizza.peppCount} X {pizza.pepp} EVERY </p>
            </div>

            <div className='flex items-center justify-between mx-5 h-full'>
                <h2> Your Bill</h2>
                <p> {pizza.cost} EVERY</p>
            </div>
         
        </DialogBody>
        <DialogFooter placeholder="click me">
          <Button
            placeholder="click me"
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button placeholder="click me" variant="gradient" color="green" onClick={handleOpen}>
            <span>Proceed to Checkout</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
    )
}
export default Cart;