import React, { useState } from 'react';

import classes from "./Comment.module.scss";
import type { CommentType } from '../../../../mocks/types';

interface CommentProps {
    data: CommentType,
    isEmbedded?: boolean
}

const Comment = (props: CommentProps) => {
    const [visible, setVisible] = useState(true);
    const { data, isEmbedded } = props;

    const onVisibilityToggled = () => {
        setVisible(prevState => !prevState);
    }

    return (
        <div className={classes.CommentContainer}>
            <div className={classes.LeftHandSide} style={!visible ? { flexDirection: "row" } : {}}>
                {!visible ? <span className={classes.ToggleButton} onClick={onVisibilityToggled}>&nbsp;</span> : null}
                <div className={classes.Avatar}>
                    AVR
                </div>
                <div className={[classes.VerticalLine, !visible ? classes.VerticalLine__Hide : null].join(" ")} onClick={onVisibilityToggled}>&nbsp;</div>
            </div>
            <div className={[classes.Comment, isEmbedded ? classes.MarginRight0 : null].join(" ")}>
                <div className={classes.Comment__Author}>
                    <span>{`${data.author}`}</span>
                    <span>{` • ${data.date}`}</span>
                </div>
                {visible ?
                    <>
                        <div className={classes.Comment__Body}>
                            {data.content}
                        </div>
                        <div className={classes.Comment__Cta}>
                            CTA
                        </div>
                        {data.responses && data.responses.map((resp: CommentType, index: number) => {
                            return <Comment key={index} data={resp} isEmbedded />
                        })}
                    </> : null}
            </div>
        </div>
    );
}

export default Comment;