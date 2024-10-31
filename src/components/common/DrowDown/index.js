import { useState } from "react";
import Image from "next/image";
import styles from "./CustomDropdown.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CustomDropdown = ({
  items,
  labelKey,
  valueKey,
  onSelect,
  className,
  title,
}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setSelectedValue(item);
    setIsOpen(false);
    onSelect(item[valueKey]);
  };

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <p className="label">{title}</p>
      <div
        className={styles["dropdown-header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue ? (
          <div className={styles.imageContainer}>
            <Image src={selectedValue.icon} width={30} height={30} alt="icon" />
            {selectedValue[labelKey]} 
          </div>
        ) : (
          "Select a coin"
        )}

        <span className={styles.arrowIcon}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {items.map((item) => (
            <li
              key={item[valueKey]}
              onClick={() => handleSelect(item)}
              className={styles["dropdown-item"]}
            >
              <Image src={item.icon} width={30} height={30} alt="icon" />
              <p>{item[labelKey]} </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
