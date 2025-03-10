import { Component } from 'react';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import type { AvatarProps } from './types';
/**
 * Avatar
 */
declare class Avatar extends Component<AvatarProps> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        shape: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        src: PropTypes.Requireable<string>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        alt: PropTypes.Requireable<string>;
        srcSet: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        prefix: string;
        size: string;
        shape: string;
    };
    state: {
        isImgExist: boolean;
    };
    componentDidUpdate(prevProps: AvatarProps): void;
    handleImgLoadError: () => void;
    getIconSize: (
        avatarSize: AvatarProps['size']
    ) => number | 'small' | 'medium' | 'large' | undefined;
    render(): React.JSX.Element;
}
export { AvatarProps };
declare const _default: {
    new (
        props: AvatarProps & import('../config-provider/types').ComponentCommonProps,
        context?: unknown
    ): import('../config-provider/types').ConfiguredComponent<
        AvatarProps & import('../config-provider/types').ComponentCommonProps,
        Avatar
    >;
    contextType?: React.Context<any> | undefined;
} & {
    propTypes: {
        prefix: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        shape: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        src: PropTypes.Requireable<string>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        alt: PropTypes.Requireable<string>;
        srcSet: PropTypes.Requireable<string>;
    };
    defaultProps: {
        prefix: string;
        size: string;
        shape: string;
    };
};
export default _default;
