import PropTypes from "prop-types";
import "../../../App.css"; 

const Button = ({ value }) => {
  return (
    <div className="btn-glow-wrapper group">
      <button className="btn-glow bg-[#FA610A] hover:bg-gradient-to-b hover:from-[#FA610A] hover:to-[#ED3C29] hover:cursor-pointer uppercase -skew-x-12 md:w-[138px] w-[168px] text-white px-3 py-3 border-[1px] border-[#ED3C29] rounded-lg relative">
        {value}
      </button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
