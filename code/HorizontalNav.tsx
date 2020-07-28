import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

import BpkHorizontalNav, {
    BpkHorizontalNavItem,
    HORIZONTAL_NAV_TYPES,
    // @ts-ignore
} from "backpack-transpiled/bpk-component-horizontal-nav"

export function HorizontalNav(props) {
    const {
        type,
        showUnderline,
        autoScrollToSelected,

        // Item properties
        items,
        _selectedItem,
        spaceAround,

        // Event properties
        onTab1Click,
        onTab2Click,
        onTab3Click,
        onTab4Click,
        onTab5Click,
        onTab6Click,
        onTab7Click,
        onTab8Click,
        onTab9Click,
        onTab10Click,
    } = props

    // Object with item data
    const allItems = [
        { text: items[0], event: onTab1Click },
        { text: items[1], event: onTab2Click },
        { text: items[2], event: onTab3Click },
        { text: items[3], event: onTab4Click },
        { text: items[4], event: onTab5Click },
        { text: items[5], event: onTab6Click },
        { text: items[6], event: onTab7Click },
        { text: items[7], event: onTab8Click },
        { text: items[8], event: onTab9Click },
        { text: items[9], event: onTab10Click },
    ].slice(0, items.length)

    const getSelection = () =>
        _selectedItem > 0 && _selectedItem <= items.length
            ? items[_selectedItem - 1]
            : ""
    const [selected, setSelected] = React.useState(getSelection())
    React.useEffect(() => setSelected(getSelection()), [_selectedItem])

    const handleClick = (item) => {
        !item.event && setSelected(item.text)
        item.event && item.event()
    }

    return (
        <BpkHorizontalNav
            type={type}
            showUnderline={showUnderline}
            autoScrollToSelected={autoScrollToSelected}
        >
            {allItems.map((item, index) => {
                return (
                    <BpkHorizontalNavItem
                        key={index}
                        name={item.text}
                        selected={selected === item.text}
                        onClick={() => handleClick(item)}
                        spaceAround={spaceAround}
                    >
                        {item.text}
                    </BpkHorizontalNavItem>
                )
            })}
        </BpkHorizontalNav>
    )
}

HorizontalNav.defaultProps = {
    height: 44,
    width: 240,
    items: ["Tab 1", "Tab 2", "Tab 3"],
    type: HORIZONTAL_NAV_TYPES.default,
    _selectedItem: 1,
}

addPropertyControls(HorizontalNav, {
    type: {
        type: ControlType.Enum,
        title: "Type",
        options: [HORIZONTAL_NAV_TYPES.default, HORIZONTAL_NAV_TYPES.light],
        defaultValue: HORIZONTAL_NAV_TYPES.default,
    },

    spaceAround: {
        type: ControlType.Boolean,
        title: "Alignment",
        defaultValue: true,
        enabledTitle: "Justify",
        disabledTitle: "Left",
    },

    showUnderline: {
        type: ControlType.Boolean,
        title: "Underline",
        defaultValue: true,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },

    autoScrollToSelected: {
        type: ControlType.Boolean,
        title: "Auto-scroll",
        defaultValue: false,
        enabledTitle: "Yes",
        disabledTitle: "No",
    },

    // Selected Item Property Controls
    _selectedItem: {
        type: ControlType.Number,
        title: "Active Tab",
        defaultValue: HorizontalNav.defaultProps._selectedItem,
        displayStepper: true,
        step: 1,
        min: 0,
        max: 10,
    },

    items: {
        type: ControlType.Array,
        title: "Tabs",
        maxCount: 10,
        defaultValue: HorizontalNav.defaultProps.items,
        propertyControl: {
            type: ControlType.String,
            defaultValue: "Tab Title",
        },
    },

    // Event Property Controls
    onTab1Click: {
        title: "Tab 1 Click",
        type: ControlType.EventHandler,
    },
    onTab2Click: {
        title: "Tab 2 Click",
        type: ControlType.EventHandler,
    },
    onTab3Click: {
        title: "Tab 3 Click",
        type: ControlType.EventHandler,
    },
    onTab4Click: {
        title: "Tab 4 Click",
        type: ControlType.EventHandler,
    },
    onTab5Click: {
        title: "Tab 5 Click",
        type: ControlType.EventHandler,
    },
    onTab6Click: {
        title: "Tab 6 Click",
        type: ControlType.EventHandler,
    },
    onTab7Click: {
        title: "Tab 7 Click",
        type: ControlType.EventHandler,
    },
    onTab8Click: {
        title: "Tab 8 Click",
        type: ControlType.EventHandler,
    },
    onTab9Click: {
        title: "Tab 9 Click",
        type: ControlType.EventHandler,
    },
    onTab10Click: {
        title: "Tab 10 Click",
        type: ControlType.EventHandler,
    },
})

HorizontalNav.displayName = "Horizontal Nav"
