import { computed } from "vue";

export function useHtmlDecoder(htmlString: string) {
    return computed(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        return doc.documentElement.textContent || "";
    });
}