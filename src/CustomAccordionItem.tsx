import React from 'react';
import './App.css';
import './AccordionStyle.css'
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function CustomAccordionItem(props: any)
{
    return(
        <div>
            <AccordionItem uuid={props.uuid}>
                <AccordionItemHeading>
                    <AccordionItemButton className={'accordion__button'}>
                        <div style={{flexDirection: 'row', flexGrow: 1}}>
                            <text style={{float: 'left'}}>{props.header}</text>
                            <text style={{float: 'right'}}>{props.date}</text>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {props.children}
                </AccordionItemPanel>
            </AccordionItem>
        </div>
    )
}

export default CustomAccordionItem;