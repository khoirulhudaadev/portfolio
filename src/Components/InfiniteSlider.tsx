import '../App.css';
import { Laravel, Node, Reacts, Redux } from '../Assets';

// Ganti dengan path sebenarnya ke ikon Anda

const InfiniteSlider = () => {
    const items = [
        { src: Reacts, alt: 'React' },
        { src: Node, alt: 'Node' },
        { src: Redux, alt: 'Redux' },
        { src: Laravel, alt: 'Laravel' },
    ];

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                {/* Render dua kali untuk efek infinity */}
                <div className="slider-content">
                    {items.map((item, idx) => (
                        <img
                            key={`${idx}-${idx}`}
                            loading="lazy"
                            src={item.src}
                            alt={item.alt}
                            className="slide-item"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteSlider;