export const UnorderedList = (props: { children: any }) => ( 
  <ul class="list-disc list-inside">{props.children}</ul>
);

export const OrderedList = (props: { children: any }) => ( 
  <ol class="list-decimal list-inside">{props.children}</ol>
);

export const ListItem = (props: { children: any }) => ( 
  <li class="text-lg font-sans text-vite-700 dark:text-vite-200 pb-1">{props.children}</li>
);