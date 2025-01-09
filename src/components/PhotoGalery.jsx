import photoBishone from '/src/assets/DogGalery/Bishone.jpg';
import photoMaltese from '/src/assets/DogGalery/Maltese.jpg';
import photoPomeranian from '/src/assets/DogGalery/Pomeranian.jpg';
import photoPomeranian2 from '/src/assets/DogGalery/Pomeranian2.jpg';
import photoPoodle from '/src/assets/DogGalery/Poodle.jpg';
import photoPoodle2 from '/src/assets/DogGalery/Poodle2.jpg';
import photoPoodle3 from '/src/assets/DogGalery/Poodle3.jpg';
import photoPoodle4 from '/src/assets/DogGalery/Poodle4.jpg';
import photoShihTzuPoodle from '/src/assets/DogGalery/ShihTzuPoodle.jpg';
import photoSpringerSpaniel from '/src/assets/DogGalery/SpringerSpaniel.jpg';
import photoXDog from '/src/assets/DogGalery/X-dog.jpg';
import photoYork from '/src/assets/DogGalery/York.jpg';
import photoYork2 from '/src/assets/DogGalery/York2.jpg';
import useNavRef  from '../hooks/useNavRef';


export const PhotoGalery = () => {
    const navRef  = useNavRef();

    return (
        <div ref={navRef.galleryRef} className="container mx-auto mt-10 scroll-mt-20">
            <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
                Moje práce
            </h2>
            <div className="columns-1 md:columns-2 xl:columns-3 gap-4 mx-auto text-left">
                <img
                    src={photoBishone}
                    alt="Bishone"
                    className="w-full scale-75 shadow-2xl"
                />
                <img
                    src={photoMaltese}
                    alt="Maltese"
                    className="w-full scale-75 shadow-2xl"
                />
                <img
                    src={photoPomeranian}
                    alt="Pomeranian"
                    className="w-full scale-75 shadow-2xl"
                />
                <img
                    src={photoPomeranian2}
                    alt="Pomeranian"
                    className="w-full scale-75 shadow-2xl"
                />
                <img src={photoPoodle} alt="Poodle" className="w-full scale-75 shadow-2xl" />
                <img
                    src={photoPoodle2}
                    alt="Poodle"
                    className="w-full scale-75 shadow-2xl"
                />
                <img
                    src={photoPoodle3}
                    alt="Poodle"
                    className="w-full scale-75 shadow-2xl"
                />
                <img
                    src={photoPoodle4}
                    alt="Poodle"
                    className="w-full scale-75 shadow-2xl"
                />
                <img
                    src={photoShihTzuPoodle}
                    alt="Shih Tzu Poodle"
                    className="w-full scale-75 shadow-2xl"
                />
                <img
                    src={photoSpringerSpaniel}
                    alt="Springer Spaniel"
                    className="w-full scale-75 shadow-2xl"
                />
                <img src={photoXDog} alt="XDog" className="w-full scale-75 shadow-2xl" />
                <img src={photoYork} alt="York" className="w-full scale-75 shadow-2xl" />
                <img src={photoYork2} alt="York2" className="w-full scale-75 shadow-2xl" />
            </div>
        </div>
    );
};
