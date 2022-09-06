import React from 'react';
import BlogDetailParagraph from "./BlogDetailParagraph";

const BlogDetailsCaptionPost=()=> {
    return (
        <div className="caption-post">
            <h3 className="title title--h3">If you’re not prepared to be wrong, you’ll never come up
                with anything original.</h3>
            <BlogDetailParagraph paragraph={'Here is one of the few effective keys to the design problem: the ability of the designer\n' +
                '                                to recognize as many of the constraints as possible his willingness and enthusiasm for\n' +
                '                                working within these constraints. The most profound technologies are those that\n' +
                '                                disappear. They weave themselves into the fabric of everyday life until they are\n' +
                '                                indistinguishable from it.'} />

            <blockquote className="block-quote">
                <BlogDetailParagraph  paragraph={'The alternative to good design is always bad design. There is no such thing as no\n' +
                    '                                    design.'}  />
                <span className="block-quote__author">Adam Judge</span>
            </blockquote>
            <BlogDetailParagraph  paragraph={'Above all, think of life as a prototype. We can conduct experiments, make discoveries,\n' +
                '                                and change our perspectives. We can look for opportunities to turn processes into\n' +
                '                                projects that have tangible outcomes.'}  />
            <BlogDetailParagraph  paragraph={'We can learn how to take joy in the things we create whether they take the form of a\n' +
                '                                fleeting experience or an heirloom that will last for generations. We can learn that\n' +
                '                                reward comes in creation and re-creation, no just in the consumption of the world around\n' +
                '                                us. Active participation in the process of creation is our right and our privilege. We\n' +
                '                                can learn to measure the success of our ideas not by our bank accounts by their impact\n' +
                '                                on the world.'}  />
        </div>
    );
}

export default BlogDetailsCaptionPost;