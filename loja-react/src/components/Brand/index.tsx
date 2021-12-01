import { Brand } from '../../@types';
import './style.css';

type BrandProps = {
    items: Array<Brand>;
}

export function Brand(props: BrandProps) {
    return (
        <div className="brands">
            <ul>
                {props.items.map(item => {
                    return (
                        <li> <img src={item.source} alt={item.alt} /> </li>
                    )
                })
                }
            </ul>
        </div>
    )
}