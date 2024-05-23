import { GradientBtn } from "..";
import { AuthProviderData } from "../../utils/AuthProvider";
import Provider from "./Provider";

export default function AuthProvider() {
  return (
    <div className="w-full h-auto p-4 flex flex-col items-start justify-start gap-4 bg-white rounded-2xl">
      <div className="w-full h-auto flex justify-between items-center">
        <GradientBtn
          type={"button"}
          label={"Регистрация через партнеров"}
          onclick={() => {}}
        />
      </div>
      <div className="w-full h-auto flex flex-col gap-2">
        {AuthProviderData.map((element) => (
          <Provider key={element.id} element={element}/>
        ))}
      </div>
    </div>
  );
}
