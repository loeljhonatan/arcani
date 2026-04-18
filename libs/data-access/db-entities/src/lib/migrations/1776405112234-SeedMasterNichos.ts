import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedMasterNichos1776405112234 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
    const niches = [
        { slug: 'anime', name: 'ANIME', theme: ['26 100% 50%', '50 100% 50%', '0 0% 98%', '0 0% 10%', 'arcani/niche/anime'], identity: ['Máscara Kitsune', 'Aura de Energía', 'ÉPICA', 'La esencia del Shonen y el Seinen.', 'El espíritu místico vs. el despertar del poder'] },
        { slug: 'manga', name: 'MANGA', theme: ['200 18% 33%', '0 0% 98%', '0 0% 94%', '0 0% 0%', 'arcani/niche/manga'], identity: ['Libro Abierto', 'Pluma de Autor', 'MÍSTICA', 'El arte de la narrativa gráfica.', 'La obra terminada vs. el trazo del mangaka'] },
        { slug: 'k-pop', name: 'K-POP', theme: ['326 100% 74%', '187 71% 72%', '0 0% 98%', '231 15% 18%', 'arcani/niche/kpop'], identity: ['Finger Heart', 'Lightstick', 'TREND', 'El paraíso de tu Bias.', 'La conexión emocional vs. el objeto de poder'] },
        { slug: 'comic-animation', name: 'COMIC & ANIMATION', theme: ['0 100% 66%', '50 100% 50%', '0 0% 98%', '0 0% 10%', 'arcani/niche/comic'], identity: ['Explosión Pop', 'Escudo Heroico', 'ÉPICA', 'La magia de las viñetas.', 'El impacto visual vs. el símbolo del héroe'] },
        { slug: 'kawaii', name: 'KAWAII', theme: ['340 82% 84%', '187 71% 72%', '0 0% 98%', '200 18% 33%', 'arcani/niche/kawaii'], identity: ['Lazo (Bow)', 'Silueta de Gato', 'GLOW', 'Ternura absoluta y estética pastel.', 'El detalle estético vs. el embajador de la ternura'] },
        { slug: 'arcade-classics', name: 'ARCADE & CLASSICS', theme: ['2 79% 55%', '35 100% 65%', '49 39% 78%', '0 0% 13%', 'arcani/niche/arcade'], identity: ['Pixel Alien', 'Joystick Clásico', 'TECH', 'Nostalgia en 8-bits.', 'El origen retro vs. el mando de la era dorada'] },
        { slug: 'gaming', name: 'GAMING', theme: ['50 100% 50%', '217 85% 34%', '0 0% 94%', '0 0% 10%', 'arcani/niche/gaming'], identity: ['Mando Pro', 'Headset (Audio)', 'TECH', 'Setup de Victoria y eSports.', 'El control total vs. la inmersión del jugador'] },
        { slug: 'cyber', name: 'CYBER', theme: ['88 66% 61%', '269 59% 38%', '0 0% 94%', '0 0% 10%', 'arcani/niche/cyber'], identity: ['Chip / Circuito', 'Rayo Neón', 'TECH', 'Vanguardia Neón y era digital.', 'La arquitectura base vs. el pulso de energía'] },
        { slug: 'cine-series', name: 'CINE & SERIES', theme: ['2 79% 55%', '217 85% 34%', '0 0% 94%', '0 0% 10%', 'arcani/niche/cine'], identity: ['Claqueta', 'Rollo de Cinta', 'MÍSTICA', 'Memorabilia de Culto.', 'El inicio de la acción vs. la memoria fílmica'] },
        { slug: 'decks-tcg', name: 'DECKS & TCG', theme: ['50 100% 50%', '2 79% 55%', '0 0% 94%', '0 0% 10%', 'arcani/niche/tcg'], identity: ['Carta TCG', 'Esfera Mística', 'MÍSTICA', 'El Rincón del Estratega.', 'El duelo estratégico vs. el poder de lo oculto'] },
        { slug: 'medieval', name: 'MEDIEVAL', theme: ['33 93% 54%', '354 74% 44%', '0 0% 94%', '0 0% 0%', 'arcani/niche/medieval'], identity: ['Espadas Cruzadas', 'Fortaleza / Trono', 'MÍSTICA', 'Acero y Fantasía oscura.', 'El honor de la batalla vs. el dominio del reino'] },
        { slug: 'musica', name: 'MÚSICA', theme: ['50 100% 50%', '268 75% 31%', '0 0% 94%', '0 0% 10%', 'arcani/niche/musica'], identity: ['Guitarra', 'Nota Musical', 'TREND', 'Estilo de vida legendario.', 'La identidad del género vs. la frecuencia del ritmo'] },
        { slug: 'deportes', name: 'DEPORTES', theme: ['217 85% 34%', '88 66% 61%', '0 0% 98%', '226 19% 24%', 'arcani/niche/deportes'], identity: ['Balón de Juego', 'Trofeo de Victoria', 'ÉPICA', 'Pasión Competitiva global.', 'La acción competitiva vs. el logro máximo'] },
        { slug: 'arcani-studio', name: 'ARCANI STUDIO', theme: ['217 85% 34%', '187 100% 42%', '0 0% 98%', '0 0% 10%', 'arcani/niche/studio'], identity: ['Herramientas', 'Paleta de Diseño', 'CREATIVA', 'Personalización y Sastrería de Sueños.', 'El taller técnico vs. la creatividad del artista'] },
        { slug: 'k-food', name: 'K-FOOD', theme: ['26 100% 50%', '0 100% 66%', '0 0% 98%', '0 0% 10%', 'arcani/niche/kfood'], identity: ['Bowl de Ramen', 'Palillos', 'GLOW', 'Sabores de tus historias favoritas.', 'El banquete servido vs. el ritual de comer'] },
        { slug: 'k-beauty', name: 'K-BEAUTY', theme: ['255 100% 73%', '340 82% 84%', '0 0% 98%', '200 18% 33%', 'arcani/niche/kbeauty'], identity: ['Labial Idol', 'Frasco de Esencia', 'GLOW', 'Ritual de brillo y vanguardia.', 'La estética visual vs. el elixir del cuidado'] }
    ];

    for (const n of niches) {
        await queryRunner.query(`INSERT INTO niche (uuid, slug, name) VALUES (UNHEX(REPLACE(UUID(), '-', '')), '${n.slug}', '${n.name}')`);
        await queryRunner.query(`SET @last_id = LAST_INSERT_ID()`);

        await queryRunner.query(`
            INSERT INTO niche_theme (id, color_primary, color_accent, color_light, color_dark, cloudinary_id)
            VALUES (@last_id, '${n.theme[0]}', '${n.theme[1]}', '${n.theme[2]}', '${n.theme[3]}', '${n.theme[4]}')
        `);

        await queryRunner.query(`
            INSERT INTO niche_identity (id, main_icon, secondary_icon, tone_tag, subtitle, narrative_concept)
            VALUES (@last_id, '${n.identity[0]}', '${n.identity[1]}', '${n.identity[2]}', "${n.identity[3]}", "${n.identity[4]}")
        `);
    }
}

    public async down(queryRunner: QueryRunner): Promise<void> {

       // 1. Obtenemos los slugs para identificar qué borrar
    const slugs = [
        'anime', 'manga', 'k-pop', 'comic-animation', 'kawaii',
        'arcade-classics', 'gaming', 'cyber', 'cine-series',
        'decks-tcg', 'medieval', 'musica', 'deportes',
        'arcani-studio', 'k-food', 'k-beauty'
    ];

    // Convertimos el array a un string para el SQL: 'anime', 'manga', ...
    const slugsList = slugs.map(slug => `'${slug}'`).join(',');

    // 2. Borramos en orden inverso (Hijos primero, Padre al final)
    // Borramos Identity y Theme basándonos en los IDs de los niches correspondientes
    await queryRunner.query(`DELETE FROM niche_identity WHERE id IN (SELECT id FROM niche WHERE slug IN (${slugsList}))`);
    await queryRunner.query(`DELETE FROM niche_theme WHERE id IN (SELECT id FROM niche WHERE slug IN (${slugsList}))`);

    // 3. Borramos finalmente los registros de la tabla padre
    await queryRunner.query(`DELETE FROM niche WHERE slug IN (${slugsList})`);


    }

}
