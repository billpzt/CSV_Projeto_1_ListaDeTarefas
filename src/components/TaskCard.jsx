import React, {useState} from 'react'

export default function TaskCard(props) {
    const [id, setId] = useState(props.id);

    return (
        <div style={styles.card}>
            <input type="checkbox" name="checkbox"></input>
            <p>{props.textoTarefa}</p>
            <button onClick={props.deleteFunction}>X</button>
        </div>
    )
}

const styles = {
    card: {
      margin: 10,
      padding: 1,
      boxShadow: "1px 1px 2px #778da9",
      backgroundColor: "lightblue",
      display: "flex",
      flexDirection: "row",
      width: 'auto',
      justifyContent: "space-between",
    }
  };