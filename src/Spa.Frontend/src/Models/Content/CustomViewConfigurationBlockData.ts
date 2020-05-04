import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from 'Episerver/Property'
import IContent from 'Episerver/Models/IContent'
import ContentLink from 'Episerver/Models/ContentLink'
import { ComponentProps } from 'Episerver/EpiComponent'

/**
 * Content Manager View
 *
 * Block used to configure Content Manager views
 *
 * @GUID 8b6435d9-ea76-483b-9062-5b505adcaa9f
 */
export default interface CustomViewConfigurationBlockData extends IContent {
    /**
     * Content root
     *
     * Root ContentLink for view
     */
    root: ContentReferenceProperty

    /**
     * Sort order
     *
     * Sort order in menu
     */
    sortOrder: NumberProperty

    /**
     * Enabled
     *
     * When true, then view is used by views provider
     */
    enabled: BooleanProperty

    /**
     * Newly created content
     *
     * ContentLink to container where contents should be added. It should be subfolder of the Content Root
     */
    newContentRoot: ContentReferenceProperty

    /**
     * Allowed types to add
     *
     * Types that editor can add when using external grid view
     */
    allowedTypesToAddString: StringProperty

}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface CustomViewConfigurationBlockProps extends ComponentProps<CustomViewConfigurationBlockData> {}