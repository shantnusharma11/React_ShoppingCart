
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="p-4 border-b-2 last:border-none border-slate-700">

      <div className="flex md:flex-row flex-col justify-between py-4 px-2 gap-16">

        <div className="md:w-[30%] flex w-full justify-center items-center">
          <img src={item.image} className=" w-[40%] md:w-[50%] lg:w-full" />
        </div>

        <div className="md:w-[70%] w-full flex flex-col gap-5">
          <h1 className="text-xl text-slate-700">{item.title}</h1>
          <h1 className=' text-slate-700'> {item.description.split(" ").slice(0, 10).join(" ")}</h1>
          
          <div className="flex justify-between">
            <p className="font-bold text-[#16a34a] text-lg">{item.price}</p>

            <div className="w-10 h-10 rounded-full bg-red 200 flex justify-center items-center hover:bg-red-400 group transition-all cursor-pointer"
            onClick={removeFromCart}>
              <FcDeleteDatabase fontSize={25} className="group-hover:text-white text-red-800 transition-all"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
