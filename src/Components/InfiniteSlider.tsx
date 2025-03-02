import '../App.css';
import { Laravel, Node, Reacts, Redux, TS } from '../Assets';

// Ganti dengan path sebenarnya ke ikon Anda

const InfiniteSlider = () => {
    const items = [
        { src: Reacts, alt: 'React' },
        { src: Node, alt: 'Node' },
        { src: Redux, alt: 'Redux' },
        { src: TS, alt: 'TypeScript' },
        { src: Laravel, alt: 'Laravel' },
    ];

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                {/* Render dua kali untuk efek infinity */}
                {[1, 2].map((_, index) => (
                    <div key={index} className="slider-content">
                        {items.map((item, idx) => (
                            <img
                                key={`${index}-${idx}`}
                                loading="lazy"
                                src={item.src}
                                alt={item.alt}
                                className="slide-item"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;