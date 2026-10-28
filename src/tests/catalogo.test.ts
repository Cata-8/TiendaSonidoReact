import { expect, test } from "vitest";
import { catalogo } from "../data/catalogo";
import { categorias, categoriasProducto } from "../data/categorias";
import { usuariosBase } from "../data/usuariosBase";

test("el catálogo migrado tiene los 51 productos con código único", () => {
    expect(catalogo).toHaveLength(51);
    expect(new Set(catalogo.map((p) => p.codigo)).size).toBe(51);
});

test("las imágenes apuntan a /img (public/img) con ruta absoluta", () => {
    for (const p of catalogo) {
        expect(p.imagen.startsWith("/img/")).toBe(true);
    }
});

test("cada producto pertenece a una categoría del mantenedor", () => {
    for (const p of catalogo) {
        expect(categoriasProducto).toContain(p.categoria);
    }
});

test("cada categoría del menú tiene productos (mismo filtro includes del origen)", () => {
    for (const c of categorias) {
        const lista = catalogo.filter((p) => p.categoria.includes(c.filtro));
        expect(lista.length, c.slug).toBeGreaterThan(0);
    }
    // "Guitarras" agrupa acústicas y eléctricas
    const guitarras = catalogo.filter((p) => p.categoria.includes("Guitarras"));
    expect(guitarras).toHaveLength(10);
});

test("los usuarios base conservan las credenciales del login original", () => {
    const admin = usuariosBase.find((u) => u.correo === "sonidovivo@gmail.cl");
    const cliente = usuariosBase.find((u) => u.correo === "usuario@gmail.cl");
    expect(admin?.clave).toBe("1234");
    expect(admin?.rol).toBe("admin");
    expect(cliente?.clave).toBe("5678");
    expect(cliente?.rol).toBe("cliente");
});
