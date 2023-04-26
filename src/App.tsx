import styles from "./app.module.css"
import { useState } from "react"

const gradientDirections = [
  'to top',
  'to top right',
  'to right',
  'to bottom right',
  'to bottom',
  'to bottom left',
  'to left',
  'to top left',
];
function App() {
  const [direction, setDirection] = useState(gradientDirections[0])
  const [colors, setColors] = useState<string[]>(["#333333","#fff000"])

  const handleAddColor = () => {
    setColors([...colors, ""]);
  };

  const handleColorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    setColors((prevState) =>
      prevState.map((color, i) => (i === index ? value : color))
    );
  };
  return (
    <div className={styles.screen} style={{ background: `linear-gradient(${direction},${colors.toString()})` }}>
      <div className={styles.form}>
        <label htmlFor="">Select Direction</label>
        <select id="gradientDirection" className={styles.direction} onChange={(e) => setDirection(e.currentTarget.value)}>
          {gradientDirections.map((direction) => (
            <option key={direction} value={direction}>
              {direction}
            </option>
          ))}
        </select>
        <label htmlFor="">Select Color # : </label>
        <div className={styles.colors}>
          {colors.map((color, index) => (
            <div key={index} className={styles.colorDiv}>
              <input
                id={`color${index}`}
                name={`color${index}`}
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e, index)}
                className={styles.inputColor}
              />
              <button className={styles.removeBtn}>X</button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className={styles.btn}
          onClick={handleAddColor}
        >
          Add More Color
        </button>
        <input type="submit" value="Submit" style={{ display: 'none' }} />
      </div>
    </div>
  )
}

export default App
