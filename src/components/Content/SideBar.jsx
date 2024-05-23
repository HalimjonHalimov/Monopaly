// eslint-disable-next-line no-unused-vars
import monopayl from "../../assets/monopayl.png";

export default function SideBar() {
  return (
    <div className="w-[1024px] h-auto ">
      <p className="text-2xl font-light text-[#000000] text-center">
        Выигрывайте по-крупному и наслаждайтесь щедрыми призами вместе с Land Of
        Monopoly на всех популярных платформах.
      </p>
      <img
        src={monopayl}
        alt="Monopayl"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
