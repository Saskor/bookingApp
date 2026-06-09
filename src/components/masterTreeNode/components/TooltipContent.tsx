import { Link } from "@vkontakte/vkui";
import { StyledTooltipContent } from "./styles";

export const TooltipContent = () => {
  return (
    <StyledTooltipContent>
      <span>8:30</span>
      <span>Стрижка</span>
      <span>1 ч. 30 мин.</span>
      <span>Аполлинария</span>
      <Link href="tel:+74950000000">+7 (495) 000-00-00</Link>
    </StyledTooltipContent>
  );
};
