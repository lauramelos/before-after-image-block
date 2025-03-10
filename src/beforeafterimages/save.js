/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import Slider from './slider';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div class="container">
				<div class="image-container">
					<InnerBlocks.Content />
				</div>
				<input type="range" min="0" max="100" value="50"
					aria-label="Percentage of before photo shown"
					class="slider" />
				<Slider />
			</div>
		</div>
	);
}
