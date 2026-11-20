import { stack, type StackItem } from "../data/stack";
import { Section } from "./Section";

const nameClass = (key?: boolean) =>
  key ? "text-[15px] font-medium text-ink" : "text-[14px] text-muted";

/**
 * One stack entry. Items with a note are a native <details>: click, tap or
 * Enter opens the note inline underneath, and the "+" turns into a "×".
 */
function StackEntry({ item }: { item: StackItem }) {
  if (!item.note) {
    return <li className={nameClass(item.key)}>{item.name}</li>;
  }

  return (
    <li>
      <details className="expand group">
        <summary
          className={`flex cursor-pointer list-none items-baseline gap-2 transition-colors hover:text-ink [&::-webkit-details-marker]:hidden ${nameClass(item.key)}`}
        >
          {item.name}
          <span
            aria-hidden
            className="text-[13px] font-normal text-muted transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <p className="mt-1.5 mb-3 max-w-xs text-[13px] leading-relaxed text-muted">
          {item.note}
        </p>
      </details>
    </li>
  );
}

export function Stack() {
  return (
    <Section
      id="stack"
      title="Stack"
      description="Core tools are in bold. Open any item marked + to see where I've used it."
      background="surface"
      snap
    >
      <div className="mt-14 grid items-start gap-x-10 gap-y-10 border-t border-hairline pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs text-muted">{group.label}</h3>
            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <StackEntry key={item.name} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
