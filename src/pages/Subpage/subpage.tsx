import { getPokemonByName } from "../../services/Axios";
import { useAPI } from "../../hooks/useApi";
import { PokemonType } from "../../model/pokemon.model";
import { UseContext } from "../../hooks/useContext";
import { Label } from "../../components/label/label";
import { Input } from "../../components/input/input";
import { Button } from '../../components/button/button';
import { useState } from "react";
import "./subpage.css";
import { useNavigate } from "react-router-dom";

export const Subpage = () => {
    const { setValue } = UseContext();
    const [search, setSearch] = useState("pikachu");
    const { data, loading, error, autoFetch } = useAPI<PokemonType>(getPokemonByName(search), { options: true });

    const onHandle = () => {
        setValue("input_pokemon");
        autoFetch()
    };
    const navigate = useNavigate();
    const onClick = ()=>{
        navigate('/signin')
    }

    return (
        <section className="section_Subpage">
            <div>
                <h1 className="section__h1">POKEDEX</h1>
                <Button type = "button"label = "SignUp" onHandle={onClick}></Button>            
            </div>
            <p className="section__p">Welcome to the Pokémon World! Here you can see different stats about Pokémon.</p>

            <div className="input__section">
                <Label content="Insert the name of the Pokémon: " />
                <Input Search={setSearch} />
                <Button type = "button" label= "Show me" onHandle={onHandle} />
                {loading && <p>Loading...</p>}
            </div>
            {error && <p className="err">Invalid input, please try again.</p>}
            <div className="section__api">
                <img
                    className="api__img"
                    src={data?.sprites.other?.home?.front_default || "error.png"}
                    alt={data?.name || "Error loading Pokémon"}
                />
                <div className="api__atributes">
                    <h3 className="h3__api">{data?.name.toUpperCase()}</h3>
                    <p>
                        Abilities
                        {data?.abilities.map((ab, index) => (
                            <span key={index}>{ab.ability.name} </span>
                        ))}
                    </p>
                    <p>
                        Type
                        {data?.types.map((type, index) => (
                            <span key={index}>{type.type.name} </span>
                        ))}
                    </p>
                    <p>Weight {<span>{data?.weight}</span>}</p>
                    <p>Height {<span>{data?.height}</span>}</p>
                    <p>Base Experience {<span>{data?.base_experience}</span>}</p>
                </div>
            </div>


            
        </section>
    );
};
