/**
 * Mock implementation of the useOnScreen hook for deterministic tests.
 * @param ref Element ref supplied by the component under test.
 * @param rootMargin Observer root margin value.
 * @returns Always true to simulate the element being visible.
 */
export default function useOnScreen(ref: React.MutableRefObject<Element>, rootMargin = '0px'): boolean {
    // Mock implementation of useOnScreen
    return true; // Return true to simulate being on screen
}
