import React, { useEffect, useState } from "react";
import { Character } from "../models/character";
import DataProvider from "../services/dataprovider";
import { Section } from "./Section";
import { CardLayout, CardLayoutCol } from "./CardLayout";
import Container from "./Container";
import Card from "./Card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTranslation } from "react-i18next";

const CharactersList: React.FC<{ lang?: string }> = ({ lang = "en" }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [characters, setCharacters] = useState<Character[]>([]);
    // const [responseInfo, setResponseInfo] = useState<ResponseInfo>();]
    const { t } = useTranslation();
    const service = DataProvider.getInstance();

    useEffect(() => {
        const abortController = new AbortController();
        const getCharacters = async () => {
            try {
                setIsLoading(true);
                const data = await service.fetchCharacters(abortController);
                setCharacters(data.results);
                // setResponseInfo(data.info);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false)
                throw error;
            }
        }

        getCharacters();

        return () => {
            abortController.abort();
        };
    }, []);


    return (
        <Section>
            <Container>
                <CardLayout>
                    {
                        !isLoading && characters?.length > 0 && characters.map(c => (
                            <CardLayoutCol key={`character-id-${c.id}`}>
                                <Card
                                    image={c.image}
                                    name={c.name}
                                    gender={t(`gender.${c.gender}`)}
                                    species={t(`species.${c.species}`)}
                                />
                            </CardLayoutCol>
                        ))
                    }
                    {isLoading && new Array(15).fill(1).map((k, i) =>
                        <CardLayoutCol>
                            <Skeleton
                                key={'character-id' + k + i}
                                height={'15rem'}
                            />
                        </CardLayoutCol>
                    )}
                </CardLayout>
            </Container>
        </Section>
    );

};

export default CharactersList;