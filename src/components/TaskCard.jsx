import React, {useState} from 'react'

export default function TaskCard(props) {
    const [id, setId] = useState(props.id);

    return (
        <div style={styles.card}>
            <input 
                type="checkbox" 
                name="checkbox"
                style={styles.checkBox}></input>
            <p>{props.textoTarefa}</p>
            <button 
                onClick={props.deleteFunction}
                style={styles.xButton}>X</button>
        </div>
    )
}

const styles = {
    card: {
      margin: 10,
      padding: 1,
      paddingRight: 15,
      paddingLeft: 15,
      boxShadow: "1px 1px 2px #778da9",
      backgroundColor: "lightblue",
      display: "flex",
      flexDirection: "row",
      width: 'auto',
      justifyContent: "space-between",
      fontSize: 20
    //   alignItems: "center"
    },
    checkBox: {
        width:25
    },
    xButton: {
        width: 45,
        height: 45,
        fontSize: 30,
        marginTop: 8,
        marginBottom: 8
    }
  };