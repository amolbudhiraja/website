type DiagramNode = {
  label: string;
  sublabel?: string;
  highlight?: boolean;
};

type DiagramRow = {
  nodes: DiagramNode[];
  label?: string;
  loop?: boolean;
  fullWidth?: boolean;
};

export function SystemDiagram({
  rows,
  caption,
}: {
  rows: DiagramRow[];
  caption?: string;
}) {
  return (
    <div className="my-8 rounded-xl border border-border bg-muted/50 p-6 not-prose">
      <div className="flex flex-col items-center gap-1">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="contents">
            {rowIdx > 0 && !row.label && (
              <div className="text-muted-foreground text-xs py-1 select-none">↓</div>
            )}

            {row.label && (
              <div className="flex items-center gap-2 w-full mt-3 mb-1">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest px-1">
                  {row.label}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            )}

            {row.fullWidth ? (
              <div className="w-full">
                {row.nodes.map((node, nodeIdx) => (
                  <div
                    key={nodeIdx}
                    className={`w-full px-4 py-2 rounded-lg border text-xs font-mono text-center ${
                      node.highlight
                        ? "border-indigo/40 bg-indigo-subtle text-indigo"
                        : "border-border bg-background text-foreground"
                    }`}
                  >
                    <div>{node.label}</div>
                    {node.sublabel && (
                      <div className="text-muted-foreground mt-0.5 text-[10px]">{node.sublabel}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {row.nodes.map((node, nodeIdx) => (
                  <div key={nodeIdx} className="contents">
                    {nodeIdx > 0 && (
                      <span className="text-muted-foreground text-xs select-none">→</span>
                    )}
                    <div
                      className={`px-3 py-2 rounded-lg border text-xs font-mono text-center min-w-[100px] ${
                        node.highlight
                          ? "border-indigo/40 bg-indigo-subtle text-indigo"
                          : "border-border bg-background text-foreground"
                      }`}
                    >
                      <div>{node.label}</div>
                      {node.sublabel && (
                        <div className="text-muted-foreground mt-0.5 text-[10px]">{node.sublabel}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {row.loop && (
              <div className="text-[10px] font-mono text-indigo flex items-center gap-1 mt-1">
                <span>↺</span>
                <span>iterative</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <p className="text-xs font-mono text-muted-foreground text-center mt-5">{caption}</p>
      )}
    </div>
  );
}
