import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import styles from './index.module.css'

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: 300,
        height: 400,
        facingMode: 'user'
    };
    const [name, setName] = useState('');
    const [isLoading, setLoading] = useState(false);

    const capture =React.useCallback(
        () => {
            setLoading(true)
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(`imageSrc=${imageSrc}`)
            axios.post(`https://getprediction3-lpkxsgezjq-et.a.run.app/predict`, {data: imageSrc})
                .then((res) => {
                    console.log(`response=${res}`)
                    setName(res.data)
                    console.log(name)
                })
                .catch(error => {
                    console.log(`error=${error}`)
                }).finally(() => {
                    setLoading(false)
                })
        },
        [webcamRef]
    );
    
    return(
        <div className={styles.main}>
            <div className={styles.webcam_container}>
                <Webcam
                    audio={false}
                    height={300}
                    ref={webcamRef}
                    screenshotFormat='image/jpeg'
                    width={350}
                    videoConstraints={videoConstraints}
                    mirrored={true}
                />
            
                {name=='' ? <></>:

                <div className={styles.result_container}>
                    <img 
                        src={`data:image/jpeg;base64,${name['ImageBytes']}`}
                    />
                </div>

                }    
                
            </div>
            <div className={styles.button_container}>
                {
                    isLoading ?
                    <p>Loading...</p>
                    :
                    <button className={styles.camera_button} onClick={capture}>Snapshot</button>
                }
            </div>
        </div>
    );
}

export default WebcamCapture;