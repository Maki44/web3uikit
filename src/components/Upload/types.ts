export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];
export interface UploadProps {
    /**
     * Set theme  either 'textOnly' or 'withIcon'
     */
    theme?: 'textOnly' | 'withIcon';

    /**
     * The callback function to be called on click
     */
    onClick?: (
        event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>,
    ) => void;

    onChange: (file: Blob | null) => void;
}
