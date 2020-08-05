/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react"
import { addPropertyControls, ControlType, Stack } from "framer"

import { NotConnected } from "./NotConnected"

import {
    BpkAccordion,
    BpkAccordionItem,
    withSingleItemAccordionState,
    withAccordionItemState,
    // @ts-ignore
} from "backpack-transpiled/bpk-component-accordion"

const SingleItemAccordion = withSingleItemAccordionState(BpkAccordion)
const StatefulAccordionItem = withAccordionItemState(BpkAccordionItem)

const defaultProps = {
    width: 360,
    height: 180,
    _isSingleExpander: true,
}

export function Accordion(props) {
    const { _isSingleExpander, children, ...rest } = props

    if (React.Children.count(children) === 0) {
        return <NotConnected prompt="Connect to a stack" />
    } else {
        const childrenOfConnected = children[0].props.children
        const hasChildren = React.Children.count(childrenOfConnected) > 0

        if (hasChildren) {
            const items = React.Children.map(
                childrenOfConnected,
                (child, key) => {
                    const { name = "Frame" } = child.props

                    const element = React.cloneElement(child, {
                        position: "relative",
                        width: "100%",
                    })

                    return _isSingleExpander ? (
                        <BpkAccordionItem id={name} title={name} key={key}>
                            {element}
                        </BpkAccordionItem>
                    ) : (
                        <StatefulAccordionItem id={name} title={name} key={key}>
                            {element}
                        </StatefulAccordionItem>
                    )
                }
            )

            const accordion = _isSingleExpander ? (
                <SingleItemAccordion {...rest}>{items}</SingleItemAccordion>
            ) : (
                <BpkAccordion {...rest}>{items}</BpkAccordion>
            )

            return accordion
        } else {
            return <NotConnected prompt="Add content to stack" />
        }
    }
}

Accordion.defaultProps = defaultProps

addPropertyControls(Accordion, {
    _isSingleExpander: {
        type: ControlType.Boolean,
        title: "Expand",
        defaultValue: true,
        enabledTitle: "Single",
        disabledTitle: "Multiple",
    },
})
